#!/usr/bin/env python3
""" multiple coroutines at the same time with async """

from typing import List
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """async routine

    Args:
        n (int): Number of times
        max_delay (int): Waiting top number

    Returns:
        List[float]: list of all the delays
    """
    delays = []
    # Crée une liste de coroutines (pas encore exécutées)
    coroutines = [wait_random(max_delay) for _ in range(n)]
    # Traite les coroutines dans l'ordre d'achèvement
    for coroutine in asyncio.as_completed(coroutines):
        delay = await coroutine
        delays.append(delay)
    return delays
