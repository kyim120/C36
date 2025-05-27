import os
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from pathlib import Path
import shutil
import google.generativeai as genai

app = FastAPI()

# Allow frontend (React) to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Directories
BASE_DIR = Path(__file__).resolve().parent
USER_DIR = BASE_DIR / "user_info"
OUTPUT_DIR = BASE_DIR / "outputs"
TEMPLATE_PATH = BASE_DIR / "templates" / "portfolio_template.html"

# Gemini setup with environment variable for API key
API_KEY = os.getenv("GOOGLE_GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("GOOGLE_GEMINI_API_KEY environment variable not set")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")


@app.post("/generate-portfolio/")
async def generate_portfolio(
    bio: str = Form(...),
    profile_pic: UploadFile = File(...),
    resume: UploadFile = File(...)
):
    # Save uploaded files
    USER_DIR.mkdir(parents=True, exist_ok=True)
    profile_path = USER_DIR / "profile_pic.jpg"
    resume_path = USER_DIR / "resume.pdf"
    info_path = USER_DIR / "info.txt"

    with open(profile_path, "wb") as f:
        shutil.copyfileobj(profile_pic.file, f)

    with open(resume_path, "wb") as f:
        shutil.copyfileobj(resume.file, f)

    info_path.write_text(bio.strip())

    if not TEMPLATE_PATH.exists():
        raise HTTPException(status_code=500, detail="Template not found.")

    template_html = TEMPLATE_PATH.read_text()

    # Construct Gemini prompt
    initial_prompt = f"""
You are a professional front-end engineer and creative designer working at a top AI tech company.

Generate a cutting-edge personal portfolio website in a **single HTML file** using HTML5, embedded CSS and JavaScript (no external libraries), based on this bio:

{bio.strip()}

Visual: Dark theme, glassmorphism, responsive, animated, modern.

--- TEMPLATE ---
{template_html}
--- END TEMPLATE ---
"""

    try:
        response = model.generate_content(initial_prompt)
        generated_html = response.text.strip()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_file = OUTPUT_DIR / "index.html"
    output_file.write_text(generated_html)

    # Also save profile pic and resume
    shutil.copy(profile_path, OUTPUT_DIR / "profile_pic.jpg")
    shutil.copy(resume_path, OUTPUT_DIR / "resume.pdf")

    return JSONResponse({"message": "Portfolio generated successfully!", "url": "/download"})


@app.get("/download")
def download_html():
    html_file = OUTPUT_DIR / "index.html"
    if html_file.exists():
        return FileResponse(html_file, media_type="text/html", filename="index.html")
    raise HTTPException(status_code=404, detail="File not found.")


@app.get("/download/profile-pic")
def download_profile_pic():
    pic_file = OUTPUT_DIR / "profile_pic.jpg"
    if pic_file.exists():
        return FileResponse(pic_file, media_type="image/jpeg", filename="profile_pic.jpg")
    raise HTTPException(status_code=404, detail="Profile picture not found.")


@app.get("/download/resume")
def download_resume():
    resume_file = OUTPUT_DIR / "resume.pdf"
    if resume_file.exists():
        return FileResponse(resume_file, media_type="application/pdf", filename="resume.pdf")
    raise HTTPException(status_code=404, detail="Resume not found.")
