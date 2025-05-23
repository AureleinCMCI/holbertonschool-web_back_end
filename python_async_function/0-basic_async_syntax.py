#!/usr/bin/env python3
""" The basics of async """
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """asynchronous coroutine

    Args:
        max_delay (int): max delay of waiting

    Returns:
        float: float number
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
