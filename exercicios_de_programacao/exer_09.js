function simboloMais(qtdeRepete) {
  let str = '+';
  let str2 = '';
  for (let i = 0; i < qtdeRepete; i++) {
    str += str2;
    console.log(str);
  }
}

simboloMais(5);
