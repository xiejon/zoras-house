import sqlite3

conn = sqlite3.connect('database.db')
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
    if res.fetchall[0] == 0:
        return
    for row in res:
        cur.execute("INSERT INTO group VALUES ({})".format(",".join([res[0], user_id, group])))
        break

    