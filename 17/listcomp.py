#loop

lst = []
for i in range(5):
    a = str(i * 2) * 2
    lst.append(a)

#print(lst)

lst = []
for i in range(5):
    lst.append(i * 10 + 7)
#print(lst)

lst=[]
for i in range(3):
    lst.append(i * 0)
    lst.append(i * 1)
    lst.append(i * 2)
#print(lst)

lst = []
l = [2,3,5,7]
comps = []
for i in range(101):
	lst.append(i)

for x in l:
    i = 2
    while i * x <= 100:
        a = i * x
        if a not in comps:
            comps.append(a)
        i += 1
comps.sort()
#print(comps)

for i in comps:
	lst.remove(i)
print(lst)
		
	

