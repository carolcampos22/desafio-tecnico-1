const readline = require('readline'); // módulo do Node.js que fornece uma interface para ler linhas de texto de uma entrada, nesse caso, o número escolhido pelo usuário

const inputChosenNumber = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); //criação da interface de leitura

inputChosenNumber.question('Digite um número inteiro: ', (valor) => {
  const chosenNumber = parseInt(valor); 

  const sumNumbers = (num) => {
    const numbers = [];
    let sum = 0;
    for (let i = 0; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        numbers.push(i);
      }
    }

    for (let j of numbers) {
      sum += j;
    }

    return sum;
  };

  const result = sumNumbers(chosenNumber);
  console.log(`A soma dos números múltiplos de 3 ou 5 até ${chosenNumber} é: ${result}`);
  
  inputChosenNumber.close(); //encerramento da interface de leitura
});