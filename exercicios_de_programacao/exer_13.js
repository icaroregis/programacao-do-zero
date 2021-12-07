const obj = { nome: 'Icaro', profissao: 'Programador De Sistemas' };

function arrayDeArrays(obj) {
  let array = [];
  for (const key in obj) {
    array.push([key, obj[key]]);
    let newObjeto = { [key]: obj[key] };
    console.log(newObjeto);
  }
  return array;
}

//acessar dinamicamente a chave do objeto => [key]
//acessar dinamicamente o valor do abjeto => obj[key]
