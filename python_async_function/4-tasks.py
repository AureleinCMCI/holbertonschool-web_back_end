#!/usr/bin/env python3
""" multiple coroutines at the same time with async """


from typing import List
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """[summary]

    Args:
        max_delay (int): max delay number

    Returns:
        asyncio.Task: Creating tasks
    """
    delays = []
    # Crée une liste de coroutines (pas encore exécutées)
    coroutines = [task_wait_random(max_delay) for _ in range(n)]
    # Traite les coroutines dans l'ordre d'achèvement
    for coroutine in asyncio.as_completed(coroutines):
        delay = await coroutine
        delays.append(delay)
    return delays
