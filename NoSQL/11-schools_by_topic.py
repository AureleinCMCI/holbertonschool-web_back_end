#!/usr/bin/env python3
""" MongoDB Update """


def schools_by_topic(mongo_collection, topic):
    """Return a list of schools having the specified topic in their documents."""
    cursor = mongo_collection.find({'topic': topic})
    schools = [doc['school'] for doc in cursor if 'school' in doc]
    return schools
