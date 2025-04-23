#!/usr/bin/env python3
"""Module pour la fonction floor annotée."""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Retourne la somme des éléments (int et float)"""
    return float(sum(mxd_lst))
