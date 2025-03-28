function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const year = getCurrentYear(); // Stocker l'année une seule fois
  
    return {
      [`income-${year}`]: income,
      [`gdp-${year}`]: gdp,
      [`capita-${year}`]: capita
    };
  }
  