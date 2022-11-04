import sqlite3


conn = sqlite3.connect('database.db')
conn.row_factory = sqlite3.Row
cur = conn.cursor()


#create the three tables
cur.execute("CREATE TABLE user(id, isAdmin, location, name, email, tags, count_of_event)")
cur.execute("CREATE TABLE groups(group_id, user_id,  chat_messages, group_name)")
cur.execute("CREATE TABLE chats(id, user_id,message)")


#fill dummy data
cur.execute("""
    INSERT INTO user VALUES
        (1, 0, "1111 Polaris Parkway", "Jane Doe", "jd@csf.org", "", "0"),
        (2, 0, "11 Polaris Parkway", "Jane Doeee", "jde@csf.org", "motherhood", "4")
""")

# #fill dummy data
cur.execute("""
    INSERT INTO groups VALUES
        (1, 1, "HI i am a user", "Motherhood"),
        (1, 2, "HI i am a user", "Motherhood")
""")


cur.execute("""
    INSERT INTO chats VALUES
        (1, 1, "HI i am a user"),
        (1, 2, "HI i am a user")
""")


conn.commit()
conn.close()








# CREATE TABLE "users" (
# 	"id"	INTEGER NOT NULL,
# 	"isAdmin"	NUMERIC NOT NULL,
# 	"location"	TEXT,
# 	"name"	TEXT,
# 	"email"	TEXT,
# 	"password"	TEXT,
# 	"te"	INTEGER,
# 	PRIMARY KEY("id")
# );








