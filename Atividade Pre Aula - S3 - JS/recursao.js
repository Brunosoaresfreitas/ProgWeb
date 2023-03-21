/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

/*
Na solução, a função fatorial recebe como parâmetro um número e através da recursividade, calculará o fatorial desse número.
Lembrando que, a recursão somente é realizada enquanto o número não for igual a 0 ou 1. Em cada recursão, a função realizará a multiplicação
do número pela chamada recursiva com o número decrementado em 1. Sendo assim, no final ela retornará o valor do fatorial do número passado como parâmetro.
*/

function fatorial(number) {
    if (number === 0 || number === 1) 
    {
      return 1;
    } else 
    {
      return number * fatorial(number - 1);
    }
  }

/*
Para utilizar a função, basta chamá-la passando algum número como parâmetro, como no exemplo abaixo:
*/  
const number = 4;
const result = fatorial(number);
console.log(result); // 24

  