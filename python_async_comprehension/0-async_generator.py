#!/usr/bin/env python3
"""Générateur asynchrone produisant 10 nombres aléatoires."""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Génère 10 nombres aléatoires entre 0 et 10 avec 1
    seconde d'attente entre chaque."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
