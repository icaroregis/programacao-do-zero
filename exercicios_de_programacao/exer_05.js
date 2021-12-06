function EhMaiorOuIgual(n1, n2) {
  if (n1 > n2) {
    return true;
  } else if (n1 === n2) {
    return true;
  } else if (n1 !== n2) {
    return false;
  } else {
    return false;
  }
}

console.log(EhMaiorOuIgual(30, 10));
