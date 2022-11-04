from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route("/data", methods=["POST"])
def groups():
    return {"groups": ["member1", "member2", "member3"]}


if __name__ == "__main__":
    app.run(debug = True)