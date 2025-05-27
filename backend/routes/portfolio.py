from flask import Blueprint, jsonify
from services.github_parser import fetch_github_projects

portfolio_bp = Blueprint('portfolio', __name__)

@portfolio_bp.route('/', methods=['GET'])
def get_portfolio():
    # Example: fetch user's GitHub projects (stub for now)
    projects = fetch_github_projects("example-username")
    return jsonify({"projects": projects})
