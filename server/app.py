from routes.auth import auth_bp
from flask import Flask, jsonify
from flask_cors import CORS

from routes.health import health_bp

app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message": "Career Skill Gap Analyzer Backend is running!"
    })


app.register_blueprint(health_bp)
app.register_blueprint(auth_bp)

if __name__ == "__main__":
    app.run(debug=True)
