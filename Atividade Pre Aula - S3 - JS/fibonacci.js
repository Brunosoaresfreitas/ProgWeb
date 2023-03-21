/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

/*
Na função fibonacciSerie, será recebido como parâmetro um número e então a função retonará uma série de fibonacci até esse número
Para gerar a série até o número fornecido, a função utiliza um loop for que itera a partir do terceiro número da sequência (índice 2). 
A cada iteração, a função calcula o próximo número da sequência somando os dois números anteriores e verifica se esse número é menor ou igual ao número fornecido. 
Se for, adiciona o número à série. Se não, o loop é interrompido e a série é retornada.
*/

function fibonacciSerie(number) 
  {
    const serie = [0, 1];
  
    for (let i = 2; i <= number; i++) 
    {
      const nextNumber = serie[i - 1] + serie[i - 2];
      if (nextNumber <= number) 
      {
        serie.push(nextNumber);
      } else 
      {
        break;
      }
    }
    return serie;
  }

/*
Para utilizar essa função, basta chamá-la passando algum número como parâmetro, como no exemplo:
*/  
const number = 60;
const result = fibonacciSerie(number);
console.log(result); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


