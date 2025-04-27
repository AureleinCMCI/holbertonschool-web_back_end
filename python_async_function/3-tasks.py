#!/usr/bin/env python3
"""Measure the average runtime per execution for wait_n."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Crée et retourne une tâche asyncio pour wait_random(max_delay)."""
    return asyncio.create_task(wait_random(max_delay))
