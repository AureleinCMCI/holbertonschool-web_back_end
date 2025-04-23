#!/usr/bin/env python3
"""Module pour la fonction floor annotée."""


from typing import Iterable, Any, List, Tuple


def element_length(lst: Iterable[Any]) -> List[Tuple[Any, int]]:
    return [(i, len(i)) for i in lst]