const objeto = {
  nome: 'Icaro',
  idade: 28,
  profissao: 'programador',
  estadoCivil: 'solteiro',
};

function deletarPropriedade(objeto, propriedade) {
  const copia = { ...objeto };
  delete copia[propriedade];
  return copia;
}

console.log(deletarPropriedade(objeto, 'estadoCivil'));
