import math
x1=eval(input())
y1=eval(input())

x2=eval(input())
y2=eval(input())

AB= math.sqrt((x1-x2)**2+(y1-y2)**2)
print(AB)
AO= math.sqrt((x1-0)**2+(y1-0)**2)
BO= math.sqrt((x2-0)**2+(y2-0)**2)

AOB=math.acos(x1*x2+y1*y2/AO*BO)
print(AOB)

angleAOB=AOB*180/math.pi
print(angleAOB)


s= (AO+BO+AB)/2
area = (s*(s-AO)*(s-BO)*(s-AB))**0.5
print('三角形面積爲：%0.2f' % area)