from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from server.db import get_connection
auth_bp = Blueprint("auth", __name__)
@auth_bp.route("/api/auth/register", methods=["POST"])
def register():
    return jsonify({
        "message": "Registration route is working!"
    }), 200