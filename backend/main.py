from flask import Flask, request
from flask_cors import CORS
import pull_data
import json

app = Flask(__name__)
CORS(app)


#this function will receive inputs from the front end and return 
@app.route("/search", methods = ["GET", "POST"])
def get_search_results():
    out = pull_data.pull_all_users()
    response_body = { 
        "users": out       
    }

    return response_body


@app.route("/data", methods=["GET","POST"])
def get_user_data():
    user_id = 1

    listOfGroups = []
    user_groups = pull_data.pull_user_groups(user_id)
    for group in user_groups:
        listOfGroups.append({"group_name": group[0], "group_id": group[1]})

    user_chats = pull_data.pull_user_chats(user_id)
    user_info = pull_data.pull_user_info(user_id)
    
    response_body = {
        "user_groups": listOfGroups,
        "user_chats": user_chats,
        "user_info": user_info
    }
    
    return response_body

if __name__ == "__main__":
    app.run(debug = True)