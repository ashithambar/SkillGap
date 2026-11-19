
from flask import Blueprint, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from db import get_connection
import re

auth_bp = Blueprint("auth", __name__)

# REGISTER
@auth_bp.route("/api/auth/register", methods=["POST"])
def register():

    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "message": "Invalid request data!"
        }), 400

    full_name = data.get("fullName")
    email = data.get("email")
    password = data.get("password")

    if not full_name or not email or not password:
        return jsonify({
            "message": "All fields are required!"
        }), 400

    if not isinstance(full_name, str) or not isinstance(email, str) or not isinstance(password, str):
        return jsonify({
            "message": "Invalid field values!"
        }), 400

    full_name = full_name.strip()
    email = email.strip().lower()

    if not full_name:
        return jsonify({
            "message": "Name cannot be empty!"
        }), 400

    if not re.match(r"^[\w.-]+@[\w.-]+\.\w+$", email):
        return jsonify({
            "message": "Please enter a valid email address!"
        }), 400

    connection = None
    cursor = None

    try:
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute(
            "SELECT UserId FROM Users WHERE Email = ?",
            (email,)
        )

        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({
                "message": "Email is already registered!"
            }), 409

        password_hash = generate_password_hash(password)

        cursor.execute(
            """
            INSERT INTO Users (FullName, Email, PasswordHash)
            VALUES (?, ?, ?)
            """,
            (full_name, email, password_hash)
        )

        connection.commit()

        return jsonify({
            "message": "Registration successful!"
        }), 201

    except Exception:
        if connection:
            connection.rollback()

        return jsonify({
            "message": "Registration failed. Please try again."
        }), 500

    finally:
        if cursor:
            cursor.close()

        if connection:
            connection.close()


# LOGIN
@auth_bp.route("/api/auth/login", methods=["POST"])
def login():

    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "message": "Invalid request data!"
        }), 400

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "message": "Email and password are required!"
        }), 400

    if not isinstance(email, str) or not isinstance(password, str):
        return jsonify({
            "message": "Invalid field values!"
        }), 400

    email = email.strip().lower()

    connection = None
    cursor = None

    try:
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute(
            """
            SELECT UserId, FullName, Email, PasswordHash
            FROM Users
            WHERE Email = ?
            """,
            (email,)
        )

        user = cursor.fetchone()

        if not user or not check_password_hash(user[3], password):
            return jsonify({
                "message": "Invalid email or password!"
            }), 401

        # Create a session for the logged-in user
        session.clear()
        session["user_id"] = user[0]

        return jsonify({
            "message": "Login successful!",
            "user": {
                "userId": user[0],
                "fullName": user[1],
                "email": user[2]
            }
        }), 200

    except Exception:
        return jsonify({
            "message": "Login failed. Please try again."
        }), 500

    finally:
        if cursor:
            cursor.close()

        if connection:
            connection.close()


# CHECK LOGIN SESSION
@auth_bp.route("/api/auth/me", methods=["GET"])
def check_session():

    user_id = session.get("user_id")

    if not user_id:
        return jsonify({
            "message": "Not logged in!"
        }), 401

    connection = None
    cursor = None

    try:
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute(
            """
            SELECT UserId, FullName, Email
            FROM Users
            WHERE UserId = ?
            """,
            (user_id,)
        )

        user = cursor.fetchone()

        if not user:
            session.clear()

            return jsonify({
                "message": "User not found!"
            }), 404

        return jsonify({
            "message": "User is logged in!",
            "user": {
                "userId": user[0],
                "fullName": user[1],
                "email": user[2]
            }
        }), 200

    except Exception:
        return jsonify({
            "message": "Unable to verify session!"
        }), 500

    finally:
        if cursor:
            cursor.close()

        if connection:
            connection.close()
# LOGOUT
@auth_bp.route("/api/auth/logout", methods=["POST"])
def logout():

    session.clear()

    return jsonify({
        "message": "Logout successful!"
    }), 200