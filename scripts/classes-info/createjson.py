import json

FILEINPUT   = 'classes.txt'
FILEOUTPUT  = 'courses.json'

data = {}

with open(FILEINPUT, 'r') as fileinput:
    lines = fileinput.readlines()
    for line in lines:
        entry = {}
        line = line.split(" ")
        info = {}
        info["information"]=""
        info["groups"]=""
        info["students"]=""
        entry[line[0]] = info
        data.update(entry)

fileinput.close()

with open(FILEOUTPUT, 'w') as fileoutput:
    json.dump(data, fileoutput, indent=4)
fileoutput.close()

