from pymongo import MongoClient
from dotenv import dotenv_values

config = dotenv_values(".env.local")

MONGO_URL = config.get("MONGO_URL", "mongo")
MONGO_USERNAME = config.get("MONGO_USERNAME", "root")
MONGO_PASSWORD = config.get("MONGO_PASSWORD", "")
MONGO_PORT = config.get("MONGO_PORT", 27017)

UNSPLASH_API_KEY = config.get("UNSPLASH_API_KEY")

mongo_client = MongoClient(
    host=MONGO_URL,
    username=MONGO_USERNAME,
    password=MONGO_PASSWORD,
    port=MONGO_PORT,
)

def insert_test_data():
    """"Insert sample data to test collection"""
    db = mongo_client.test
    test_collection =  db.test_collection
    res = test_collection.insert_one({"name": "Marc", "age": 25})
    print(res)