/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

/*
Na solução, a função somarMatriz irá receber como parâmetro uma matriz e então realizar a soma de todos os números da matriz e retornar o resultado
Isso será feito utilizando o laço de repetição for, na qual haverá outro for dentro para realizar as iterações dentro de cada linha e cada coluna da
matriz, obtendo o número e adicionando a variável soma, que será inicializada com o valor 0
*/

function sumMatriz(matriz) 
{
    let sum = 0;
    for (let i = 0; i < matriz.length; i++) 
    {
      for (let j = 0; j < matriz[i].length; j++) 
      {
        sum += matriz[i][j];
      }
    }
    return sum;
  }

/*
Para utilizar a função, basta passar qualquer matriz como parâmetro, como no exemplo abaixo:
*/  
const matriz = [[4, 9, 3], [4, 6, 2], [5, 6, 3]];
const result = sumMatriz(matriz);
console.log(result); // 42


  
  