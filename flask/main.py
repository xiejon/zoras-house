from flask import Flask, request
from flask_cors import CORS
import pull_data
import push_db

app = Flask(__name__)
CORS(app)

@app.route("/login_path", methods = ["GET", "POST"])
def login():
    read_in = request.json
    user_name = read_in["username"]
    pwrd = read_in["password"]
    out = push_db.login(user_name,pwrd)
    if out == -1:
        return "", 401
    else:
        user_id = out[2]
        listOfGroups = []
        user_groups = pull_data.pull_user_groups(user_id)
        for group in user_groups:
            listOfGroups.append({"group_name": group[0], "group_id": group[1]})

        user_chats = pull_data.pull_user_chats(user_id)
        user_info = pull_data.pull_user_info(user_id)

        listGroupsC = listOfGroups.copy()

        recGroups = []
        for d in listGroupsC:
            if d['group_name'] == "motherhood" or d['group_name'] == "expectant mother of twins" or d['group_name'] == "mom" or d['group_name'] == "mother":
                recGroups.append('mother')
            elif d['group_name'] == "master"
            
        # groupBank = ['student', 'entrepreneur', 'career', 'single', 'married', 'mother', 'hobby', 'finance', 'identity']

        response_body = {
            "username": out[0],
            "password": out[1],
            "user_id": out[2],
            "user_groups": listOfGroups,
            "user_chats": user_chats,
            "user_info": user_info
        }
        
        return response_body
        return out, 200
    

#this function will receive inputs from the front end and return 
@app.route("/search", methods = ["GET", "POST"])
def get_search_results():
  out = pull_data.pull_all_users()
  response_body ={
      "data": out
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

@app.route("/filteredUsers", methods=["POST"])
def get_filterd_users():
    read_filters = request.json["tags"]
    listOfUserIds = pull_data.pull_users_by_tags(read_filters)

    response_body = []
    for id in listOfUserIds:
        response_body.append({k: v for k, v in enumerate(pull_data.pull_user_info(id))})
    
    return response_body
@app.route("/find_people", methods = ["GET", "POST"])
def get_profile_groups():
    read_in = request.json
    id = int(read_in["user_id"])
    listOfGroups = []
    groups = pull_data.pull_user_groups(id)
    for group in groups:
        listOfGroups.append({"group_name": group[0], "group_id": group[1]})
    
    user_info = pull_data.pull_user_info(id)
    
    response = {
        "data": listOfGroups,
        "user_info": user_info
    }
    
    return response


if __name__ == "__main__":
    app.run(debug = True)