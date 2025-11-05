const sum = require('../src/sum');

test('soma 2 + 2 para ser igual a 4', () => {
  expect(sum(2, 2)).toBe(4);
});