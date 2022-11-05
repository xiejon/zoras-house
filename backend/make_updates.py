import sqlite3


conn = sqlite3.connect('database.db')
conn.row_factory = sqlite3.Row
cur = conn.cursor()



# #fill dummy data
cur.execute("""
    INSERT INTO groups VALUES
        (2, 1, "ITERNATIONAL RELATIONS")
""")

conn.commit()
conn.close()

