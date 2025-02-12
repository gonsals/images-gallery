import requests
from flask import Flask, Response, request, jsonify
from dotenv import dotenv_values
from flask_cors import CORS
from mongo_client import mongo_client

gallery = mongo_client.gallery
images_collection = gallery.images

config = dotenv_values(".env.local")

DEBUG =bool(config.get("DEBUG", True))
UNSPLASH_API_KEY = config.get("UNSPLASH_API_KEY")
UNSPLASH_URL='https://api.unsplash.com/photos/random'

if not UNSPLASH_API_KEY:
    raise EnvironmentError("Please create .env.local file and insert the API key")

app = Flask(__name__)
CORS(app)

# DEBUG mode to see the changes on change
app.config["DEBUG"] = DEBUG

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_API_KEY
        }

    params = {"query": word}

    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)

    return response.json()

@app.route("/images", methods=["GET", "POST", "DELETE"])
def images():
    if request.method == "GET":
        # read images from database
        images = images_collection.find({})
        return jsonify([img for img in images])
    if request.method == "POST":
        # insert new image to database
        image = request.get_json()
        image["_id"] = image.get("id")
        result = images_collection.insert_one(image)
        inserted_id = result.inserted_id
        return {"inserted_id": inserted_id}

@app.route("/images/<image_id>", methods=["DELETE"])
def delete_image(image_id):
    if request.method == "DELETE":
        # delete image from database
        result = images_collection.delete_one({"_id": image_id})
        if not result:
            return Response(status=500, response=f"Image {image_id} not deleted")
        if result.deleted_count == 0 : 
            return Response(status=404, response=f"No image with id {image_id} found")
        return Response(status=200, response=f"Deleted id {image_id}")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)