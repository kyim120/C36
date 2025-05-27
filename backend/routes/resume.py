from flask import Blueprint, request, jsonify
from services.openai_service import generate_resume_text

resume_bp = Blueprint('resume', __name__)

@resume_bp.route('/', methods=['POST'])
def create_resume():
    data = request.json
    if not data:
        return jsonify({"error": "Missing JSON data"}), 400

    # Call AI service to generate resume content (stub for now)
    generated_text = generate_resume_text(data)

    return jsonify({"resume_text": generated_text})
