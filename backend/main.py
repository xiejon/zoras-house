from flask import Flask, request
from flask_cors import CORS
api = Flask(__name__)
CORS(api)


@api.route("/data", methods=["POST"])
def send_data():
    return 