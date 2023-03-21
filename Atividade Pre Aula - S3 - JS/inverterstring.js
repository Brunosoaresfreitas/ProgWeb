/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

/*
Na função invertString, será passado como parâmetro uma string qualquer e ela retornará a string invertida, ou seja, de trás para frente.
Para realizar a inverção da string, começamos declarando uma variável newString vazia, e então a partir daí começamos um laço de repetição
utilizando o for. O laço de repetição começa no índice string.lenght -1, que é justamente o último caracter da string passada como parâmetro
e a partir daí ela é decrementada até chegar no primeiro caracter da string. Dessa forma, para cada iteração, é adicionada a variável que 
criamos o caracter da iteração, até que a iteração acabe. Por fim, a função retorna essa nova string gerada invertida.
*/
function invertString(string) 
  {
    let newString = '';
  
    for (let i = string.length - 1; i >= 0; i--) 
    {
      newString += string[i];
    }
  
    return newString;
  }

/*
Para utilizar essa função, basta chamá-la passando alguma string como parâmetro, como no exemplo:
*/  

const string = 'Javascript é ótimo!';
const result = invertString(string);
console.log(result); // '!omitó é tpircsavaJ'
