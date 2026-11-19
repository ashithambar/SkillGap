
import os

from flask import Flask, jsonify, session
from flask_cors import CORS
from dotenv import load_dotenv

from routes.auth import auth_bp
from routes.health import health_bp

# Load environment variables from server/.env
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

app = Flask(__name__)

# Configure session security
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

if not app.config["SECRET_KEY"]:
    raise RuntimeError("SECRET_KEY is missing from the .env file!")

# Allow React to use session cookies
CORS(app, supports_credentials=True)


@app.route("/")
def home():
    return jsonify({
        "message": "Career Skill Gap Analyzer Backend is running!"
    })


app.register_blueprint(health_bp)
app.register_blueprint(auth_bp)


if __name__ == "__main__":
    app.run(debug=True)
