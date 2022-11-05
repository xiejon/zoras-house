import sqlite3
import json
conn = sqlite3.connect('database.db', check_same_thread=False)
cur = conn.cursor()

#this function will output all users:
def pull_all_users():
    res = cur.execute("SELECT * from USER")
    out = []
    for row in res:
        out.append(list(row))
    ret = []
    for lst in out:
        ret.append({k: v for k, v in enumerate(lst)})
    return ret


def get_users_and_groups(user_id):
    list_of_groups =[]
    res = cur.execute("SELECT group_name, group_id FROM GROUPS WHERE user_id = {}".format(user_id))
    for row in res:
        list_of_groups.append(row)
    return list_of_groups
    
    
    


def pull_user_groups(user_id):
    list_of_groups =[]
    res = cur.execute("SELECT group_name, group_id FROM GROUPS WHERE user_id = {}".format(user_id))  
    for row in res:
        list_of_groups.append(row)
    return list_of_groups
 

def pull_user_chats(user_id):
    list_of_chats =[]
    res = cur.execute("SELECT message, id FROM CHATS WHERE user_id = {}".format(user_id))  
    for row in res:
        list_of_chats.append(row[0])
    return list_of_chats


def pull_user_info(user_id):
    res = cur.execute("SELECT * from USER where id = {}".format(user_id))
    for row in res:
        return list(row)

# returns all users who fall under specific list of groups
def pull_users_by_groups(groups):
    listOfUsers = []
    for i in range(len(groups)):
        res = cur.execute("SELECT name FROM groups, user WHERE user.id = groups.user_id and groups.group_name = '{}'".format(groups[i]))
        result = res.fetchone()
        if result:
            listOfUsers.append(result[0])
    return listOfUsers

# returns all users who have specific list of tags
def pull_users_by_tags(tags):
    res = None
    listOfUsers = []
    if not tags:
<<<<<<< HEAD
        res = cur.execute("SELECT id FROM user")
        for row in res:
            listOfUsers.append(row[0])
    else:
        res = cur.execute("SELECT id, tags FROM user")
=======
        res = cur.execute("SELECT name FROM user")
        for row in res:
            listOfUsers.append(row[0])
    else:
        res = cur.execute("SELECT name, tags FROM user")
>>>>>>> 2825bc0 (pull by tags and by groups have been extensively tested)
        for row in res:
            count = 0
            tmp = row[-1].split(", ")
            for tag in tmp:
                if tag in tags:
                    count += 1
            if count >= len(tags):
                listOfUsers.append(row[0])
    return listOfUsers
            


list_of_chats = pull_all_users()
list_of_users = pull_users_by_tags([])
print(json.dumps(list_of_users))
