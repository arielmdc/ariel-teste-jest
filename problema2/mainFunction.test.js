const binarySearch = require('./mainFunction');

function generateRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

function runTest(array, target) {
  array.sort((a, b) => a - b); // Certifique-se de que o array está ordenado
  const targetIndex = array.indexOf(target);
  const result = binarySearch(array, target);

  console.log(`Array: ${array}`);
  console.log(`Target: ${target}`);
  console.log(`Expected: ${targetIndex}`);
  console.log(`Received: ${result}`);

  if (targetIndex !== -1) {
    if (array[result] === target) {
      expect(array[result]).toBe(target); // Confirme que o valor na posição retornada é o alvo
    } else {
      expect(result).toBe(targetIndex); // Compare a posição diretamente se o valor não coincidir
    }
  } else {
    expect(result).toBe(-1);
  }
}

for (let i = 0; i < 1000; i++) {
  test(`Teste aleatório ${i + 1}`, () => {
    const array = generateRandomArray(100, 1000);
    const target = Math.floor(Math.random() * 1000); // Garantir que o alvo pode ou não estar no array
    runTest(array, target);
  });
}
