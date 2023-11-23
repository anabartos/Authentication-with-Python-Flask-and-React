"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#User and userRegistration

#@api.route('/user', methods=['GET'])
#def get_users():
#    users = User.query.all()
#   data = [user.serialize() for user in users]
    
#   return jsonify(data), 200


@api.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(email=data["email"], password=data["password"], name=data["name"], last_name=data["last_name"])
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "everything ok"}), 200


    #Login
@api.route('/login', methods=['POST'])
def login():
    data = request.json

    email = data.get("email")
    name = data.get("name")
    password = data.get("password")
    last_name = data.get("last_name")


    user = User.query.filter_by(email= email, password= password, name= name, last_name= last_name).first()
    if not user:
        return jsonify({"message": "incorrect email or password"}), 400
    token = create_access_token(identity=user.id)

    return jsonify({"token": token, "user":user.serialize()}), 200

 
@api.route('/private', methods=['GET'])
@jwt_required()
def private():
    email=get_jwt_identity()
    return jsonify({"user": email})
