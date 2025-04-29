#!/usr/bin/env python3
"module : function"

def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Calcule la plage d'index pour une pagination donnée.

    Args:
        page (int): Numéro de page (1-indexé, la première page est 1)
        page_size (int): Nombre d'éléments par page

    Returns:
        tuple: (start_index, end_index)
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
