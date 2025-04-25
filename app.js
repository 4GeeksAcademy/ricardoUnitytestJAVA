

const oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

// 1. Convertir de Dólar a Yen
const fromEuroToDollar = (euro) => {
    const conversionRate = 1.07;
    return euro * conversionRate;
};

const fromDollarToYen = (dollar) => {
    const conversionRate = 146.73;
    return dollar * conversionRate;
};

const fromYenToPound = (yen) => {
    const conversionRate = 0.00557;
    return yen * conversionRate;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };