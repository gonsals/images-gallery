import requests
from flask import Flask, request
from dotenv import dotenv_values
from flask_cors import CORS
from mongo_client import insert_test_data

config = dotenv_values(".env.local")

# insert_test_data() # Insert test data pero solo una vez


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

# @app.route("/images")
# def images():
#     headers = {
#         "Accept-Version": "v1",
#         "Authorization": "Client-ID " + UNSPLASH_API_KEY
#         }


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)