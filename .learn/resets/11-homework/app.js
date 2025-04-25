

const oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

// 1. Convertir de Dólar a Yen
const fromDollarToYen = function(dollar) {
    const euro = dollar / oneEuroIs["USD"]; // De dólar a euro
    const yen = euro * oneEuroIs["JPY"];    // De euro a yen
    return yen;
};

// 2. Convertir de Euro a Dólar
const fromEuroToDollar = function(euro) {
    return euro * oneEuroIs["USD"]; // De euro a dólar (directamente)
};

// 3. Convertir de Yen a Libra
const fromYenToPound = function(yen) {
    const euro = yen / oneEuroIs["JPY"];   // De yen a euro
    const pound = euro * oneEuroIs["GBP"]; // De euro a libra
    return pound;
};

// Exportar las funciones para poder usarlas en otros archivos o en tests
module.exports = { fromEuroToDollar, fromDollarToYen, fromEuroToDollar, fromYenToPound}