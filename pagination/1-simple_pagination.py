import csv
import math
from typing import List,Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset
    
    @staticmethod
    def index_range(page: int, page_size: int) -> Tuple[int, int]:
        ''' Def index range '''
        index = page * page_size - page_size
        index_1 = index + page_size
        return (index, index_1)
    
    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Retourne une page de données du dataset"""
        # Vérification des paramètres
        assert isinstance(page, int) and page > 0, "page doit être un entier > 0"
        assert isinstance(page_size, int) and page_size > 0, "page_size doit être un entier > 0"
       # Vérification des limites
    
        
        start_index, end_index = self.index_range(page, page_size)

        if start_index >= len(self.dataset()):
            return [] 
        return self.dataset()[start_index:end_index]
    
