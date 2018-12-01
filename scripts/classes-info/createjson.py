#creates a json file that we need for firebase's database. 
#The json file contains the classes that are hapeening in this current quarter

import json

FILEINPUT   = 'classes.txt'
FILEOUTPUT  = 'courses.json'

data1 = {}
data = {}

with open(FILEINPUT, 'r') as fileinput:
    lines = fileinput.readlines()
    for line in lines:
        entry = {}
        line = line.split(" ")
        info = {}
        info["information"]=""
        info["groups"]=""
        # info["students"]=""
        entry[line[0]] = info
        data1.update(entry)
    data['classes']=data1

fileinput.close()

with open(FILEOUTPUT, 'w') as fileoutput:
    json.dump(data, fileoutput, indent=4)
fileoutput.close()

