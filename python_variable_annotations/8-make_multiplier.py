#!/usr/bin/env python3
"""Module pour la fonction floor annotée."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies its input by the given multiplier."""
    def multiply(x: float) -> float:
        return x * multiplier
    return multiply
