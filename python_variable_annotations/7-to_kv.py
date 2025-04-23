#!/usr/bin/env python3
"""Module pour la fonction floor annotée."""


from typing import List, Union , Tuple
def to_kv(k:str , v:Union[int,float] ) -> Tuple[str, float]:
    return (k , v**2 )