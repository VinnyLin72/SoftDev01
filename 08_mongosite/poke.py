import pymongo, pprint, json

SERVER_ADDR = "157.230.187.86"
connection = pymongo.MongoClient(SERVER_ADDR)

pp = pprint.PrettyPrinter(indent=4)
db = connection.db
collection = db.pokemon

with open("pokemon.json") as f:
    data = json.load(file)

collection.insert(data)
    
def searchType( ty ):
    cursor = collection.find({
        "type" : ty
        })
    for i in cursor:
        pp.pprint(i)
        print()

# all pkmn between a certain height range                                                                                                                                                                   
def heightRange( mini, maxi ):
    cursor = collection.find({
        "$and": [ {"height" : {"$gte": mini}}, {"height" : {"$lte" : maxi}} ]
        })
    for i in cursor:
        pp.pprint(i)
        print()

# show pokemon below a certain spawn chance                                                                                                                                                                 
def rarePoke( chance ):
    cursor = collection.find({
        "spawn_chance" : {"$lt" : chance}
        })
    for i in cursor:
        pp.pprint(i)
        print()

#searchType("Grass")                                                                                                                                                                                        
heightRange("2.2 m", "2.22 m")
#rarePoke(0.05)                      
