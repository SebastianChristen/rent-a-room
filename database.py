from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
from bson.json_util import dumps
from datetime import datetime
from flask import request

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['rent-a-room']
collection = db.rooms

@app.route('/')
def home():
    rooms = collection.find(
        {'$or': [
            {'bewohner_ids': {'$exists': False}},
            {'bewohner_ids': {'$size': 0}}
        ]},
        {'name': 1}
    )
    return render_template('index.html', rooms=rooms)

@app.route('/room/<id>')
def room(id):
    room = collection.find_one({'_id': ObjectId(id)})
    return dumps(room)

@app.route('/update-room/<id>', methods=['POST'])


@app.route('/sell')
def sell():
    return render_template('sell.html')





def update_room(id):
    room_data = request.json
    # Formatierung der Daten von Strings zu Datumsobjekten
    gebucht_von = datetime.strptime(room_data['gebucht_von'], '%Y-%m-%d')
    gebucht_bis = datetime.strptime(room_data['gebucht_bis'], '%Y-%m-%d')
    bewohner = room_data['bewohner_ids'].split(',')  # Nehme an, dass die IDs durch Kommas getrennt sind

    # Aktualisiere das Dokument in der Datenbank
    result = collection.update_one(
        {'_id': ObjectId(id)},
        {'$set': {
            'gebucht_von': gebucht_von,
            'gebucht_bis': gebucht_bis,
            'bewohner_ids': bewohner
        }}
    )

    return jsonify({'success': result.modified_count > 0})


@app.route('/account/<email>')
def account(email):
    person = db.persons.find_one({"_id": email})
    if not person:
        return "Person nicht gefunden", 404

    # Suche nach Räumen, bei denen die Person entweder Besitzer oder Bewohner ist.
    rooms_owned = list(collection.find({"besitzer_id": email}))
    rooms_rented = list(collection.find({"bewohner_ids": email}))

    # Render das Template und übergebe die Person und die Raumdaten
    return render_template('account.html', person=person, rooms_owned=rooms_owned, rooms_rented=rooms_rented)



if __name__ == '__main__':
    app.run(debug=True)
