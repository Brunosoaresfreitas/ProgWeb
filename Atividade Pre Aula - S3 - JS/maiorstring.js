/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

function encontrarPalavraMaisLonga(string) {
    const palavras = string.trim().split(/\s+/);
    let palavraMaisLonga = '';
    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i].length > palavraMaisLonga.length) {
        palavraMaisLonga = palavras[i];
      }
    }
    return palavraMaisLonga;
  }

/*Para utilizar essa função, basta chamá-la passando uma string como argumento, por exemplo:*/  

const string = 'Esta é uma string de exemplo para encontrar a palavra mais longa.';
const resultado = encontrarPalavraMaisLonga(string);
console.log(resultado); // 'encontrar'

/*Nessa implementação, a função encontrarPalavraMaisLonga recebe uma string como argumento e retorna a palavra mais longa presente na string. 
Para encontrar a palavra mais longa, a função utiliza os métodos trim() e split() da string para dividir a string em um array de palavras. 
Em seguida, a função percorre o array com um loop for e compara o comprimento de cada palavra com o comprimento da palavra mais longa encontrada até o momento. 
Se a palavra atual for mais longa, a variável palavraMaisLonga é atualizada com a nova palavra. No final do loop, a função retorna a palavra mais longa encontrada.*/
