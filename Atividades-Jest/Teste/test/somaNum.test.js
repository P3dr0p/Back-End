const somaNumeros = require('../index');

test('A função deve retornar a soma de dois números', () => {
  expect(somaNumeros(10, 20)).toBe(30);
  expect(somaNumeros(15, 15)).toBe(30);
  expect(somaNumeros(80, 10)).toBe(90);
});
