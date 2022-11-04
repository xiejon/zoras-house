import sqlite3
conn = sqlite3.connect('database.db')
cur = conn.cursor()



def pull_user_groups(user_id):
    list_of_groups =[]
    res = cur.execute("SELECT group_name, group_id FROM GROUPS WHERE user_id = {}".format(user_id))  
    for row in res:
        list_of_groups.append(row[0])
    return list_of_groups
    
    



