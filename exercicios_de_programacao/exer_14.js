const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function receberSomenteOsParesDeIndicesPares(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 2) {
    if (array[i] % 2 === 0) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}
