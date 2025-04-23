#!/usr/bin/env python3
"""Module pour la fonction floor annotée."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a function that multiplies its input by the given multiplier."""

    return [(i, len(i)) for i in lst]
