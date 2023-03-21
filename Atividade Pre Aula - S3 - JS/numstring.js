/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

/*
Na função countWords, será fornecido como parâmetro uma string e será retornado como resultado o número de palavras presentes na string fornecida.
Para realizar a contagem das palavras, será necessário a utlização de dois métodos. 
O trim -> Removerá os espaços em brancos no início e final da string
E o split(/\s+/) -> Dividirá a string em um array de substrings usando um ou mais espaços em brancos como delimitador
Após isso, utilizamos o método .lenght para retornar o comprimento do array resultante, ou seja, o número de palavras contidas na string fornecida.
*/
function countWords(string) 
  {
    const words = string.trim().split(/\s+/);
    return words.length;
  }

/*
Para utilizar essa função, basta chamá-la passando qualquer string como argumento, segue exemplo:
*/  

const string = 'Olá, mundo! Javascript é fantástico';
const result = countWords(string);
console.log(result); // 5

