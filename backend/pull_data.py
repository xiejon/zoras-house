import sqlite3
conn = sqlite3.connect('database.db', check_same_thread=False)
cur = conn.cursor()


#this function will output all users:
def pull_all_users():
    res = cur.execute("SELECT * from USERS")
    print(res)


#pull all groups that a user is in, given access to their user ids. 
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
    out = res.fetchall()[0]
    return {"id": out[0], "isAdmin": out[1], "location":out[2], "name":out[3], "email":out[4], "tags":out[5], "count_of_event":out[6]}
    
list_of_chats = pull_all_users()
print(list_of_chats)




