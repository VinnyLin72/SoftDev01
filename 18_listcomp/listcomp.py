'''
Chinese Communist Party -- Jack Lu, Vincent Lin
SoftDev2 pd8
K #18: Getting Clever with List Comprehensions
2019-04-16
'''
'''pythogorean'''

def list_pyth(n):
    lst = [[x, y, z] for x in range(n+1) for y in range(x,n+1) for z in range(y,n+1) if x**2 + y**2 == z**2 and x>0]
    print(lst)

'''quicksort'''

def quicksort(lst):
    if len(lst) <= 2:
        return lst
    else: 
        piv = len(lst)/2
        #print(lst)
        out = (quicksort([x for x in lst if x < lst[piv]])) + [(lst[piv])] + (quicksort([x for x in lst if x > lst[piv]]))
        return out
#print([(x,y) for x in range(7) for y in range(7,14)]) #y = [1,2,3]]

list_pyth(20)
print(quicksort([7,1,6,2,4,5,8,9,3]))
