import pymongo

class Mongo():
    dbname = "rent-a-room"
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient[dbname]

    print(myclient.list_database_names())

    dblist = myclient.list_database_names()
    room = mydb["rooms"]
    customer = mydb["persons"]

    if dbname in dblist:
        print("The database has been found")

    def createLogin(name, firstname, email, password, telnr, address):
        mydict = {"name": name, "firstname": firstname, "password": password, "address": address, "email": email, "telnr": telnr}
        Mongo.customer.insert_one(mydict)
        return 1

    def getLogin(email):
        for x in Mongo.customer.find({"email": email}, {"email": 1, "firstname": 1, "password": 1}):
            print(x)
            return x

    def createRoom(name, desc, address, room_amount, space, owner, owner_id):
        mydict = {"name": name, "beschreibung": desc, "address": address, "room_amount": room_amount, "space": space, "owner": owner, "owner_id": owner_id}
        Mongo.room.insert_one(mydict)
        return 1

    def getRoom(filtername):
        for x in Mongo.room.find({"name": filtername}, {"_id": 1, "name": 1, "beschreibung": 1, "owner": 1}):
            print(x)
            return x

    def getRoomByOwner(owner, owner_id):
        for x in Mongo.room.find({"owner": owner, "owner_id": owner_id}, {"_id": 1, "name": 1, "beschreibung": 1}):
            print(x)
            return x



    def getAllRooms(self):
        for x in Mongo.room.find({}, {}):
            print(x)
            return x

    def getByName(name):
        for x in Mongo.room.find({"name": name }, {}):
            print (x)
            return x
    def getByDesc(beschreibung):
        for x in Mongo.room.find({"beschreibung": beschreibung}, {}):
            print(x)
            return x

    def getByRoomAmount(room_amount):
        for x in Mongo.room.find({"room_amount": room_amount}, {}):
            print(x)
            return x

    def getBySpace(space):
        for x in Mongo.room.find({"space": space},{}):
            print(x)
            return x

    def deleteRoom(name, owner, owner_id):
        objToDelete = {"name": name, "owner": owner, "owner_id": owner_id}
        Mongo.room.delete_one(objToDelete)
        if(not Mongo.customer.find(objToDelete)):
            return 1




