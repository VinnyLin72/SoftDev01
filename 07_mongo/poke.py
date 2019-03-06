## Communist Party of China -- Vincent Lin, Jack Lu
## SoftDev2 pd8
## K07 -- Import/Export Bank
## 2019-03-05

# Pokemon database containing pokedex entries for gen 1 pokemon
# https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json

# imported using pymongo

# Cleaned data before entering to db: formatted each pokedex entry into separate dict since 
# original json gave me lots of query trouble

import pymongo
import pprint

#all pokemon of specific type
SERVER_ADDR = "159.89.238.115"
connection = pymongo.MongoClient(SERVER_ADDR)

pp = pprint.PrettyPrinter(indent=4)
db = connection.db
collection = db.pokemon

# search by type
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
