'''
Chinese Communist Party -- Jack Lu, Vincent Lin
SoftDev2 pd8
K #17: PPFTLCW
2019-04-12
'''

'''Loop'''

# ['00', '22', '44', '66', '88']
lst = []
for i in range(5):
    a = str(i * 2) * 2
    lst.append(a)
#print(lst)

# [7, 17, 27, 37, 47]
lst = []
for i in range(5):
    lst.append(i * 10 + 7)
#print(lst)

# [0, 0, 0, 0, 1, 2, 0, 2, 4]
lst=[]
for i in range(3):
    lst.append(i * 0)
    lst.append(i * 1)
    lst.append(i * 2)
#print(lst)

# composite [0, 100]
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

# primes [0, 100]
for i in comps:
    lst.remove(i)
#print(lst)

# all divisors
def getDiv(n):
    lst = []
    for i in range(1, n + 1):
        if n % i == 0:
            lst.append(i)
    print(lst)
#getDiv(34)

#transpose matrix
def transpose(m):
    temp = [a[:] for a in m]
    print(temp)
    for i in range( len(temp) ):
        for j in range( len(temp[0]) ):
            m[i][j] = temp[j][i]
    print(m)

#transpose([
#    [1, 2, 3],
#    [4, 5, 6],
#    [7, 8, 9]
#    ])

'''List Comp'''

# ['00', '22', '44', '66', '88']
lst = [str(x * 2) * 2 for x in range(5)]
#print(lst)

# [7, 17, 27, 37, 47]
lst = [x*10 + 7 for x in range(5)]
#print(lst)

# [0, 0, 0, 0, 1, 2, 0, 2, 4]
lst = [x for x in range(3) for x in (x*0, x*1, x*2)]
#print(lst)

# composite [0, 100]
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

# primes [0, 100]
for i in comps:
    lst.remove(i)
#print(lst)

# all divisors
def getDiv(n):
    lst = []
    for i in range(1, n + 1):
        if n % i == 0:
            lst.append(i)
    print(lst)
#getDiv(34)

#transpose matrix
def transpose(m):
    temp = [a[:] for a in m]
    print(temp)
    for i in range( len(temp) ):
        for j in range( len(temp[0]) ):
            m[i][j] = temp[j][i]
    print(m)

#transpose([
#    [1, 2, 3],
#    [4, 5, 6],
#    [7, 8, 9]
#    ])
