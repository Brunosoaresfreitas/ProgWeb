/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas
DATA: 20/03/2023
*/

/*O Bubble Sort é um algoritmo de classificação (ou ordenação) simples que funciona comparando pares de elementos adjacentes 
em uma lista e trocando-os se estiverem na ordem errada. Ele continua fazendo isso para cada par de elementos consecutivos 
na lista até que a lista esteja completamente ordenada.
*/
function bubbleSort(arr) {
  const len = arr.length;
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

/*
Para utilizar essa função, basta chamá-la passando um array como argumento, por exemplo:
*/
const array = [2, 3, 6, 4, 5];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // [2, 3, 4, 5, 6]


