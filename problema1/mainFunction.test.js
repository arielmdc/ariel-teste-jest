// problema1/mainFunction.test.js

const { mainFunction } = require('./mainFunction');

// Testes com critérios definidos
test('Teste com particionamento de equivalência', () => {
  expect(mainFunction('example')).toBe('elpmaxe');
});

test('Teste com análise do valor limite', () => {
  expect(mainFunction('')).toBe('');
});

// Testes aleatórios
for (let i = 0; i < 1000; i++) {
  const randomString = Math.random().toString(36).substring(2, 15);
  test(`Teste aleatório ${i + 1}`, () => {
    expect(mainFunction(randomString)).toBe(randomString.split('').reverse().join(''));
  });
}
