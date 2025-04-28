#!/usr/bin/env python3
"""Mesure le temps d'exécution de 4 appels parallèles à async_comprehension"""

import asyncio
import time
from importlib import import_module

# Import dynamique de async_comprehension depuis le fichier précédent
async_comprehension = import_module('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Mesure le temps total d'exécution de 4 appels parallèles à async_comprehension"""
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    return time.time() - start_time
