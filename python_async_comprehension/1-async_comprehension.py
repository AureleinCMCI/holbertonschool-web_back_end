#!/usr/bin/env python3
"""Générateur asynchrone produisant 10 nombres aléatoires."""


from typing import List
from typing import Generator


async_generator = __import__('0-async_generator').async_generator
 
        

async def async_comprehension() -> List[float]:
    """
    Collecte 10 nombres aléatoires en utilisant une async comprehension.
    Chaque nombre est généré après 1 seconde d'attente asynchrone.
    """
    return [num async for num in async_generator()]