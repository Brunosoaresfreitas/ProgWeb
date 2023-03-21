/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

/*
Na função checkIfIsPrimo, será passado um número como parâmetro e por fim retornará false ou true, caso retorne false indicará que o número
não é primo, caso retorne true indicará que o número é primo.
A função funciona da seguinte forma, caso o número seja menor ou igual a 1, já retornará false, pois não será um número primo.
Então caso o número seja maior do que 1, será utilizado um laço de repetição com o for que começará iterando com o valor 2
até a raiz quadrada do número, e, caso o número for divisível por algum desses números dentro da iteração, ele não é um número primo
e portanto a função retornará false. Caso o loop se encerre e não encontre nenhum número divisível dentro da iteração, retornará true
indicando que se trata de um número primo.
*/
function checkIfIsPrimo(number) {
    if (number <= 1) 
    {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) 
    {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

/*
Para utlizar a função, basta chamá-la passando algum número como parâmetro, como no exemplo abaixo:
*/
const number = 13;
const result = checkIfIsPrimo(number);
console.log(result); // true

