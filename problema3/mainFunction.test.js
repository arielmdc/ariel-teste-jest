const { mainFunction } = require('./mainFunction');

// Testes com critérios definidos
test('Teste com particionamento de equivalência', () => {
  expect(mainFunction([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
});

test('Teste com análise do valor limite', () => {
  expect(mainFunction([])).toEqual([]);
});

// Testes aleatórios
for (let i = 0; i < 1000; i++) {  // Temporariamente reduzido para 5
  const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
  const sortedArr = [...arr].sort((a, b) => a - b);  // Crie uma cópia do array antes de ordenar
  test(`Teste aleatório ${i + 1}`, () => {
    expect(mainFunction(arr)).toEqual(sortedArr);
  });
}
