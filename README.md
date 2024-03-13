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
   {
    "beschreibung": "string",
    "ort": {
      "type": "Point",
      "koordinaten": [longitude, latitude]
    },
    "bewohner_ids":[ObjectId],
    "besitzer_id": ObjectID,
    "zimmer": "number",
    "fläche": "number",
    "gebucht_von": ISODate,
    "gebucht_bis": ISODate
  },
  // etc... etc...
 }
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


## dynamik

vollständige collection
```
{
  "_id": ObjectId,
  "beschreibung": "string",
  "ort": {
    "type": "Point",
    "koordinaten": [longitude, latitude]
  },
  "bewohner_ids":[ObjectId],
  "besitzer_id": ObjectID,
  "zimmer": "number",
  "fläche": "number",
  "gebucht_von": ISODate,
  "gebucht_bis": ISODate
}
```

nicht gebuchter raum, ohne "bewohner_ids" und ohne "gebucht von/bis"
```
{
  "_id": ObjectId,
  "beschreibung": "string",
  "besitzer_id": ObjectID,
  "ort": {
    "type": "Point",
    "koordinaten": [longitude, latitude]
  },
  "zimmer": "number",
  "fläche": "number",
}
```

nicht gebuchter raum, ohne "Beschreibung"
```
{
  "_id": ObjectId,
  "besitzer_id": ObjectID,
  "ort": {
    "type": "Point",
    "coordinates": [longitude, latitude]
  },
  "zimmer": "number",
  "fläche": "number",
}
```

## daten anzeigen

Realistisches Anzeigen von Daten, wie sie in etwa in der App funktionieren:

[Alle]
- Alle Räume finden, egal wo
- Sortieren/Filtern nach Ort, Fläche, Zimmeranzahl etc.

[Nur jeder User für sich]
- Den Raum anzeigen, welchen man besitz
- Den Raum anzeigen, welchen man bewohnt
- Sein eigenes Profil anzeigen
- Sein eigenes Profil bearbeiten (Telefon, Email, Alter...)
- Sein Profil löschen

[Der Bucher]
- Den Bewohner vom Raum ändern
- Gebucht von/bis vom Raum ändern

[Der Besitzer ]
- Die Raumdetails (Fläche, Zimmer, Besitzer, Beschreibung...) bearbeiten
- Den Raum löschen



etwas finden
```
db.rooms.findOne({ _id: ObjectId("your_room_id") })
```

alle räume anzeigen
```
db.rooms.find({})
```

ein
```
[TODO]
```
[TODO]
[TODO]
[TODO]
[TODO]
