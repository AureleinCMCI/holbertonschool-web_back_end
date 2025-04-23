#!/usr/bin/env python3
"""Module pour la fonction floor annotée."""


from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple where the first element is k and the """
    return (k, v**2)
