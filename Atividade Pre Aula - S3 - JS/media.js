/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

/*
Na função calcAverage, será fornecido como parâmetro um array de números e ela retornará a média desses números.
Sendo assim, é declarado uma constante sum, que utilizará o método reduce do array para somar todos os números  do array.
Após isso, é declarado uma constante average que receberá o valor encontrado na soma e dividirá pelo tamanho do array de números
fornecido como parâmetro, e então, a função retornará a média.
*/
function calcAverage(numbers)   
  {
    const sum = numbers.reduce((total, number) => total + number, 0);
    const average = sum / numbers.length;
    return average;
  }

/*
Para utilizar essa função, basta chamá-la passando um array de números como parâmetro da função, segue exemplo:
*/  

const numbers = [6, 12, 4, 8];
const result = calcAverage(numbers);
console.log(result); // 7.5

