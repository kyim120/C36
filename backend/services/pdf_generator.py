from jinja2 import Environment, FileSystemLoader, select_autoescape
from weasyprint import HTML
import os
from io import BytesIO

# Set up Jinja2 environment to load templates from the backend/templates directory
template_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'templates')
env = Environment(
    loader=FileSystemLoader(template_dir),
    autoescape=select_autoescape(['html', 'xml'])
)

def render_resume_template(resume_data):
    """
    Render the resume template with the given resume data.

    :param resume_data: dict containing resume information
    :return: rendered HTML string
    """
    template = env.get_template('resume_template.html')
    return template.render(resume=resume_data)

def generate_pdf_from_html(html_content):
    """
    Generate a PDF file from the given HTML content.

    :param html_content: HTML string to convert to PDF
    :return: PDF bytes
    """
    pdf_io = BytesIO()
    HTML(string=html_content).write_pdf(target=pdf_io)
    pdf_io.seek(0)
    return pdf_io.read()

def generate_resume_pdf(resume_data):
    """
    Generate a PDF for the resume data.

    :param resume_data: dict containing resume information
    :return: PDF bytes
    """
    html_content = render_resume_template(resume_data)
    pdf_bytes = generate_pdf_from_html(html_content)
    return pdf_bytes

def save_pdf_to_file(pdf_bytes, output_path):
    """
    Save PDF bytes to a file.

    :param pdf_bytes: PDF content in bytes
    :param output_path: file path to save the PDF
    """
    with open(output_path, 'wb') as f:
        f.write(pdf_bytes)
