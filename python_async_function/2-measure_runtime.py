#!/usr/bin/env python3
""" multiple coroutines at the same time with async """

from typing import List
import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:

    """"mesure le temps d ' exécution de la fonction wain_n"""""

    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    endtime = time.time()
    total_time = endtime - start
    return total_time / n
