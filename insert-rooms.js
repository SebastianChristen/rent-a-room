db.rooms.insertMany([
  {
    "name": "Gemütliches Cottage",
    "beschreibung": "Ein charmantes Cottage am Seeufer",
    "ort": {
      "type": "Point",
      "koordinaten": [9.1705, 48.7823]
    },
    "besitzer_id": "emma.jackson@example.com",
    "zimmer": 2,
    "fläche": 120
  },
  {
    "name": "Bergidyll",
    "beschreibung": "Ein abgelegenes Berghaus mit Panoramablick",
    "ort": {
      "type": "Point",
      "koordinaten": [10.0848, 47.5917]
    },
    "bewohner_ids": ["emma.jackson@example.com"],
    "besitzer_id": "john.doe@example.com",
    "zimmer": 3,
    "fläche": 180,
    "gebucht_von": ISODate("2024-04-10T00:00:00Z"),
    "gebucht_bis": ISODate("2024-04-15T00:00:00Z")
  },
  {
    "name": "Strandvilla",
    "beschreibung": "Eine luxuriöse Strandvilla mit eigenem Zugang zum Meer",
    "ort": {
      "type": "Point",
      "koordinaten": [7.0926, 51.4195]
    },
    "bewohner_ids": ["james.brown@example.com", "sophie.wilson@example.com"],
    "besitzer_id": "michael.adams@example.com",
    "zimmer": 4,
    "fläche": 250,
    "gebucht_von": ISODate("2024-05-01T00:00:00Z"),
    "gebucht_bis": ISODate("2024-05-10T00:00:00Z")
  },
  {
    "name": "Stadtpalast",
    "beschreibung": "Ein prächtiger Palast im Herzen der Stadt",
    "ort": {
      "type": "Point",
      "koordinaten": [13.4049, 52.5200]
    },
    "bewohner_ids": ["michael.adams@example.com", "sarah.johnson@example.com"],
    "besitzer_id": "sophie.wilson@example.com",
    "zimmer": 6,
    "fläche": 400,
    "gebucht_von": ISODate("2024-06-15T00:00:00Z"),
    "gebucht_bis": ISODate("2024-06-30T00:00:00Z")
  },
  {
    "name": "Alpenhütte",
    "beschreibung": "Eine rustikale Hütte in den Alpen",
    "ort": {
      "type": "Point",
      "koordinaten": [11.0778, 47.4917]
    },
    "bewohner_ids": ["sarah.johnson@example.com"],
    "besitzer_id": "james.brown@example.com",
    "zimmer": 2,
    "fläche": 100,
    "gebucht_von": ISODate("2024-07-05T00:00:00Z"),
    "gebucht_bis": ISODate("2024-07-12T00:00:00Z")
  },
  {
    "name": "Seehaus",
    "beschreibung": "Ein modernes Haus direkt am See",
    "ort": {
      "type": "Point",
      "koordinaten": [6.9537, 46.8182]
    },
    "bewohner_ids": ["john.doe@example.com", "michael.adams@example.com"],
    "besitzer_id": "sarah.johnson@example.com",
    "zimmer": 3,
    "fläche": 180,
    "gebucht_von": ISODate("2024-08-20T00:00:00Z"),
    "gebucht_bis": ISODate("2024-08-25T00:00:00Z")
  },
  {
    "name": "Waldhütte",
    "beschreibung": "Eine gemütliche Hütte mitten im Wald",
    "ort": {
      "type": "Point",
      "koordinaten": [8.6127, 47.3963]
    },
    "bewohner_ids": ["sophie.wilson@example.com", "john.doe@example.com"],
    "besitzer_id": "james.brown@example.com",
    "zimmer": 2,
    "fläche": 120,
    "gebucht_von": ISODate("2024-09-01T00:00:00Z"),
    "gebucht_bis": ISODate("2024-09-07T00:00:00Z")
  },
  {
    "name": "Ferienwohnung am Fluss",
    "beschreibung": "Eine gemütliche Ferienwohnung am Ufer eines Flusses",
    "ort": {
      "type": "Point",
      "koordinaten": [13.3766, 52.5166]
    },
    "bewohner_ids": ["emma.jackson@example.com", "sarah.johnson@example.com"],
    "besitzer_id": "john.doe@example.com",
    "zimmer": 1,
    "fläche": 80,
    "gebucht_von": ISODate("2024-10-10T00:00:00Z"),
    "gebucht_bis": ISODate("2024-10-20T00:00:00Z")
  },
  {
    "name": "Chalet am See",
    "beschreibung": "Ein gemütliches Chalet mit Blick auf den See",
    "ort": {
      "type": "Point",
      "koordinaten": [8.5619, 47.3769]
    },
    "bewohner_ids": ["james.brown@example.com"],
    "besitzer_id": "sophie.wilson@example.com",
    "zimmer": 3,
    "fläche": 150,
    "gebucht_von": ISODate("2024-11-05T00:00:00Z"),
    "gebucht_bis": ISODate("2024-11-15T00:00:00Z")
  },
  {
    "name": "Stadtwohnung",
    "beschreibung": "Eine moderne Wohnung im Stadtzentrum",
    "ort": {
      "type": "Point",
      "koordinaten": [11.5761, 48.1371]
    },
    "bewohner_ids": ["jane.smith@example.com"],
    "besitzer_id": "emma.jackson@example.com",
    "zimmer": 2,
    "fläche": 100,
    "gebucht_von": ISODate("2024-12-01T00:00:00Z"),
    "gebucht_bis": ISODate("2024-12-10T00:00:00Z")
  },
  {
    "name": "Landhaus",
    "beschreibung": "Ein idyllisches Landhaus mit großem Garten",
    "ort": {
      "type": "Point",
      "koordinaten": [13.4050, 52.5200]
    },
    "bewohner_ids": ["john.doe@example.com", "james.brown@example.com"],
    "besitzer_id": "sarah.johnson@example.com",
    "zimmer": 4,
    "fläche": 200,
    "gebucht_von": ISODate("2025-01-05T00:00:00Z"),
    "gebucht_bis": ISODate("2025-01-15T00:00:00Z")
  },
  {
    "name": "Ferienhaus am Wald",
    "beschreibung": "Ein gemütliches Ferienhaus am Waldrand",
    "ort": {
      "type": "Point",
      "koordinaten": [8.3913, 49.0047]
    },
    "besitzer_id": "jane.smith@example.com",
    "zimmer": 3,
    "fläche": 160
  },
  {
    "name": "Strandhaus",
    "beschreibung": "Ein charmantes Strandhaus mit Meerblick",
    "ort": {
      "type": "Point",
      "koordinaten": [7.1100, 51.3674]
    },
    "besitzer_id": "sophie.wilson@example.com",
    "zimmer": 2,
    "fläche": 110
  },
  {
    "name": "Hütte im Tal",
    "beschreibung": "Eine einfache Hütte inmitten eines Tals",
    "ort": {
      "type": "Point",
      "koordinaten": [8.6815, 47.3769]
    },
    "bewohner_ids": ["sophie.wilson@example.com", "john.doe@example.com"],
    "besitzer_id": "jane.smith@example.com",
    "zimmer": 1,
    "fläche": 70,
    "gebucht_von": ISODate("2025-04-01T00:00:00Z"),
    "gebucht_bis": ISODate("2025-04-10T00:00:00Z")
  },
  {
    "name": "Ferienwohnung am Berg",
    "beschreibung": "Eine gemütliche Ferienwohnung in den Bergen",
    "ort": {
      "type": "Point",
      "koordinaten": [11.0778, 47.4917]
    },
    "bewohner_ids": ["jane.smith@example.com"],
    "besitzer_id": "james.brown@example.com",
    "zimmer": 2,
    "fläche": 90,
    "gebucht_von": ISODate("2025-05-01T00:00:00Z"),
    "gebucht_bis": ISODate("2025-05-15T00:00:00Z")
  },
  {
    "name": "Seeapartment",
    "beschreibung": "Ein modernes Apartment mit Seeblick",
    "ort": {
      "type": "Point",
      "koordinaten": [9.1625, 47.0962]
    },
    "bewohner_ids": ["emma.jackson@example.com"],
    "besitzer_id": "michael.adams@example.com",
    "zimmer": 1,
    "fläche": 60,
    "gebucht_von": ISODate("2025-06-01T00:00:00Z"),
    "gebucht_bis": ISODate("2025-06-10T00:00:00Z")
  },
  {
    "name": "Almhütte",
    "beschreibung": "Eine traditionelle Almhütte auf einer Bergwiese",
    "ort": {
      "type": "Point",
      "koordinaten": [11.0833, 47.5094]
    },
    "besitzer_id": "sophie.wilson@example.com",
    "zimmer": 2,
    "fläche": 100
  },
  {
    "name": "Wasserhaus",
    "beschreibung": "Ein modernes Haus auf Stelzen im Wasser",
    "ort": {
      "type": "Point",
      "koordinaten": [9.1743, 48.7758]
    },
    "besitzer_id": "michael.adams@example.com",
    "zimmer": 3,
    "fläche": 200
  },
  {
    "name": "Ferienhaus am Flussufer",
    "beschreibung": "Ein gemütliches Ferienhaus am Ufer eines Flusses",
    "ort": {
      "type": "Point",
      "koordinaten": [13.4069, 52.5194]
    },
    "bewohner_ids": ["john.doe@example.com"],
    "besitzer_id": "james.brown@example.com",
    "zimmer": 2,
    "fläche": 120,
    "gebucht_von": ISODate("2025-09-01T00:00:00Z"),
    "gebucht_bis": ISODate("2025-09-10T00:00:00Z")
  }
])
