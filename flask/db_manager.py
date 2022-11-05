import sqlite3


conn = sqlite3.connect('database.db')
conn.row_factory = sqlite3.Row
cur = conn.cursor()


#create the three tables
cur.execute("CREATE TABLE user(id, isAdmin, location, name, email, password, tags, count_of_event)")
cur.execute("CREATE TABLE groups(group_id, user_id, group_name)")
cur.execute("CREATE TABLE chats(id, user_id,message)")


#fill dummy data
cur.execute("""
    INSERT INTO user VALUES
        (1, 0, "1111 Polaris Parkway", "Jane Doe", "jd@csf.org", "somepwd", "bookclub", 12),
        (2, 0, "11 Polaris Parkway", "Jane Doeee", "jde@csf.org", "somepwd123", "motherhood, bookclub", 15)
""")

# #fill dummy data
cur.execute("""
    INSERT INTO groups VALUES
        (1, 1, "Women In Tech"),
        (1, 2, "Women In Tech"),
        (1,2,"Entrepreneur"),
        (2,1,"Women in Medicine"),
        (3,1 ,"BIPOC in Politics"),
        (2,1,"Women in Medicine"),
        (3,1, "BIPOC in Politics"),
        (1,1,"Entrepreneur"),
        (4,2, "Society of Hispanic Engineers"),
        (4,1, "Society of Hispanic Engineers")
        
""")

#fill in some dummy data
cur.execute("""
    INSERT INTO chats VALUES
        (1, 1, "HI i am a user"),
        (1, 2, "HI i am a user")
""")


conn.commit()
conn.close()