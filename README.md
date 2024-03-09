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
 

 
