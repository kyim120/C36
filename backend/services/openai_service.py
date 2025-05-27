import os
import openai
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_resume_text(user_data):
    # Basic example prompt to OpenAI (expand with your prompt engineering)
    prompt = f"Create a professional resume based on this info:\n{user_data}"

    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=500,
            temperature=0.7,
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return f"Error generating resume: {e}"
