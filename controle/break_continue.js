// break, ele interrompe a repetição e sai do for e segue o fluxo do código
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// continue: pula a repetição selecionada quando for true...
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
