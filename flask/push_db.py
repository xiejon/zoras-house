import sqlite3

conn = sqlite3.connect('database.db', check_same_thread=False)
conn.row_factory = sqlite3.Row
cur = conn.cursor()

def push_chats(id):
    pass

def add_tags_to_user(user_id, tags):
    listOfTags = []
    res = cur.execute("SELECT tags FROM user WHERE id == {}".format(user_id))
    for row in res:
        listOfTags.extend(row[5])
    listOfTags.extend(tags)
    cur.execute("UPDATE user SET tags = ({})".format(",".join(listOfTags)))

def add_user_to_group(user_id, group):
    res = cur.execute("SELECT user_id, group_id FROM groups WHERE user_id == {}".format(user_id))
    if res.fetchall()[0] == 0:
        return
    for row in res:
        cur.execute("INSERT INTO group VALUES ({})".format(",".join([res[0], user_id, group])))
        break

def login(email, password):
    print(email)
    print(password)
    print("SELECT * FROM user WHERE user.email = '{}'".format(email))
    print("SELECT email FROM user WHERE name = \"Jane Doe\"")
    res = cur.execute("SELECT * FROM user WHERE email = '{}' and password = '{}'".format(email,password))
    #res = cur.execute("SELECT * FROM user")
    result = res.fetchone()
    
    if result is None:
        return -1
    else:
        return [result[4],result[5],result[0]]
        
    

    