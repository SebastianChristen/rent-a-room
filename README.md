# rent-a-room
## Raummanaging Software ählich wie AirBNB
Gibb Modul 165


## create db script
```
use rent-a-room
```

## create collection
```
db.createCollection("rooms")
db.createCollection("persons")
```

## insert room documents
```
db.rooms.insertMany([ 
  { 
    "beschreibung": "Beispielbeschreibung", 
    "ort": {   
      "type": "Point", 
      "coordinates": [longitude, latitude] 
    }, 
    "bewohner_ids": [ObjectId()], 
    "zimmer": 3, 
    "fläche": 120, 
    "gebucht_von": new ISODate("2024-03-09T00:00:00Z"), 
    "gebucht_bis": new ISODate("2024-03-16T00:00:00Z") 
  }, 
  // etc... etc...
]) 
```

## insert persons documents
``` 
db.persons.insertMany([
  {
    "vorname": "Max",
    "nachname": "Mustermann",
    "alter": 30,
    "geschlecht": "männlich",
    "telefon": "0123456789",
    "email": "max.mustermann@example.com"
  },
   // etc... etc...
])
```

## Update a room
```
db.rooms.update(
  { _id: ObjectId("your_room_id") },
  {
    $set: {
      "bewohner_ids": [new_ObjectId],
      "gebucht_von": new ISODate("2024-03-11T00:00:00Z"),
      "gebucht_bis": new ISODate("2024-03-18T00:00:00Z")
    }
  }
)
```

## update a person
```
db.persons.update(
  { _id: ObjectId("your_person_id") },
  {
    $set: {
      "telefon": "9876543210"
    }
  }
)
```

## löschen
```
db.rooms.remove({ _id: ObjectId("your_room_id") })
```
```
db.persons.remove({ _id: ObjectId("your_person_id") })
```
 
