import os
import requests
from flask import Flask, request
from dotenv import dotenv_values

config = dotenv_values(".env.local")


UNSPLASH_API_KEY = config.get("UNSPLASH_API_KEY")
UNSPLASH_URL='https://api.unsplash.com/photos/random'

if not UNSPLASH_API_KEY:
    raise EnvironmentError("Please create .env.local file and insert the API key")

app = Flask(__name__)

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


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)