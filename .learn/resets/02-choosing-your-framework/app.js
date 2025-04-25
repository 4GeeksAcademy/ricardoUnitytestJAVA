
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 156.7;

    return valueInYen;
}
const fromYenToDollar = function(valueInPund) {
    
    let valueInPound = valueInDollar * 0.87;

    return valueInPound;
}
const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}