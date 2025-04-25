const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

// Test: de Euro a Dólar
test('Convierte 3.5 euros a dólares', () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.75, 2); // 3.5 * 1.07
});

// Test: de Dólar a Yen
test('Convierte 1 dólar a yenes', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.73, 2);
});

// Test: de Yen a Libra
test('Convierte 1000 yenes a libras', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.57, 2);
});

