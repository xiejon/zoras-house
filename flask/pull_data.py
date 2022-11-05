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
    
list_of_chats = pull_all_users()
print(json.dumps(list_of_chats))
