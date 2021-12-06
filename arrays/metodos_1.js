//array    
const numeros = [1, 2, 3, 4, 5, 8];

//Atribuição de um valor ao primiero elmento do array
numeros[0] = 100;

//adicionar elementos no array
numeros.push(6);

//indexOf => posição do elemento no array
console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4));

//verificar se existe o elemento passado como parametro no includes
console.log(numeros.includes(10));
console.log(numeros.includes(6));

//adicionar algum elemento que separará cada item do array
console.log(numeros.join(' - '));
console.log(numeros);

//cria um novo array, que depois pode ser concatenado com outro array ja existente
const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2);
