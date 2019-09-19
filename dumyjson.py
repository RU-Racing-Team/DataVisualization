import json
from random import randrange as random
class Td:
    tiretemp1 = random(-20,50)
    tiretemp2 = random(-20,50)
    tiretemp3 = random(-20,50)
    tiretemp4 = random(-20,50)
    engineTemp = random(0,160)
    steeringRotation = random(0,360)
    shock1 = random(0,100)
    shock2 = random(0,100)
    shock3 = random(0,100)
    shock4 = random(0,100)
print json.dumps(Td.__dict__)
