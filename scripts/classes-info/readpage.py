import urllib

outputFile=open('classes1.txt','w')

#read page => updateclasses => createjson
#Readpage he course information from the school's website then toutputs the html as a txt file

link = "https://courses.soe.ucsc.edu/courses/cmps"
f = urllib.urlopen(link)
myfile = f.read()
out = myfile.replace("\n\n", "\n")
out = out.replace("\n\n", "\n")
out = out.replace("\n\n", "\n")
out = out.replace("\n\n", "\n")
out = out.replace("\n\n", "\n")
print(out)
outputFile.write(out)

outputFile.close()
