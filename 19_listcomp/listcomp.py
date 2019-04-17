'''
Chinese Communist Party -- Jack Lu, Vincent Lin
SoftDev2 pd8
K #19: Ready, Set, Math!
2019-04-16
'''

def union(a, b):
    ''' only one occurance of each element in result'''
    lst = []
    lst = [x for x in a if x not in lst]
    [lst.append(x) for x in b if x not in lst]
    return lst

def intersection(a, b):
    ''' element is in intersection if in both a and b'''
    return [x for x in a if x in b]

def difference(u, a):
    ''' element is in u but not in a'''
    return [x for x in u if x not in a]

def sym_diff(a, b):
    ''' elements exclusive to one set'''
    return union(difference(a,b),difference(b,a))

def cart_product(a, b):
    ''' all possible combinations of elements in a and b '''
    return [(x, y) for x in a for y in b]

#cs = cart_product({1,2}, {'red', 'white'})
#print(cs)

#u = union({1,2,3}, {2,3,4})
#print(u)

#i = intersection({1,2,3}, {2,3,4})
#print(i)

#sd = sym_diff({2,3,4}, {1,2,3,})
#print(sd)

#d = difference({2,3,4}, {1,2,3,})
#print(d)
