#this reads the txt file of the course page's html and select the courses that we want

inputFile=open('classes1.txt','r')
outputFile=open('classes.txt','w')

#the quarter we want
quarter="Fall18"

for line in inputFile:
    words = line.split()
    if (len(words)!=0):
    	if (words[0]=="<a"):
    		str = words[1].split("/")
    		for st in str:
    			if(st==quarter):
    				wline = str[2] + " " + "\n" 
    				outputFile.write(wline)


inputFile.close()
outputFile.close()
