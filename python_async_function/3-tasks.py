#!/usr/bin/env python3
""" multiple coroutines at the same time with async """

from typing import List
import asyncio
import time

wait_n = __import__('0-basic_async_syntax.').wait_n


def task_wait_random(max_delay: int):
    """Crée et retourne une tâche asyncio pour wait_random(max_delay)."""
    return asyncio.create_task(wait_n(max_delay))
