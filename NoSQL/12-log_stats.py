#!/usr/bin/env python3
""" Log stats from MongoDB """
from pymongo import MongoClient

def log_stats():
    client = MongoClient('mongodb://localhost:27017/')
    db = client.logs
    collection = db.nginx

    # Total logs
    total = collection.count_documents({})
    print(f"{total} logs")

    # Methods count
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Status check count
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")