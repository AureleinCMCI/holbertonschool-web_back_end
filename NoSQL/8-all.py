#!/usr/bin/env python3
import pymongo


def list_all(mongo_collection):
    # Récupère tous les documents de la collection
    documents = list(mongo_collection.find())
    # Retourne une liste vide si aucun document n'est trouvé
    return documents if documents else []