//sugestão de array
['Javascript', 1, '3', 'Web', 20];

function returnNumbers(array) {
  let newArray = [];
  for (const e of array) {
    if (typeof e === 'number') {
      newArray.push(e);
    }
  }
  return newArray;
}

//observação => para array puros sem ter um nome associado usamos o for of. Para objetos puros sem um nome associado usamos for in

// for off => array
// for in => objetos
