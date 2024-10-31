function somarPrecos() {
    let precos = [20, 10, 100];

    //reduce

   let soma = precos.reduce(function(acc, preco){ // soma
   return acc + preco
  });

  console.log(soma)

  // let resultado = precos.reduce(function(acc, preco) { // multiplicação
        //return acc * preco;
   // }, 1);

  //  console.log(resultado);

}

somarPrecos();

/*
Exercicios

EX: 01 - Implemente a função ao lado que recebe um array de números e retorna a soma de todos os números utilizando o método reduce() para efetuar a soma.

Exemplos:
Se for passado array=[1, 2, 3, 4], deve retornar 10 porque é a soma de todos os números
Se for passado array=[ ], deve retornar zero

resposta: 
function somaArray(array) {
return array.reduce((acumulador, numero) => acumulador + numero, 0);
}


ex: 02 - Implemente a função ao lado que recebe um array de objetos representando filmes, onde cada filme tem a estrutura {nome, ano, generos}. A função deve retornar uma string contendo a concatenação de todos os nomes dos filmes do array. Você deve usar a função reduce() para percorrer o array e concatenar os nomes.

Exemplos:
Se for passado filmes=[{nome: 'Matrix', ano: 1999, generos: ['Ação']}, {nome: 'Titanic', ano: 1997, generos: ['Drama']}], deve retornar 'MatrixTitanic'
Se for passado filmes=[ ], deve retornar ''


resposta:
function concatenarNomesFilmes(filmes) {
  return filmes.reduce((acc, filme) => acc + filme.nome, '')
}



Ex: 03 - Implemente a função ao lado que recebe um array de números e retorna a soma de todos os números multiplicados pelo respectivo índice (começando em 1) do elemento no array. Por exemplo, o elemento na posição 0 do array será multiplicado por 1, o elemento na posição 1 será multiplicado por 2, e assim por diante, até o final do array. A função deve usar a função reduce() para calcular o valor final.

Exemplos:
Se for passado array = [10, 20, 30], deve retornar 1*10 + 2*20 + 3*30 = 140
Se for passado array = [ ], deve retornar 0
1234
function somaPonderada(array) {
  // Escreva aqui seu código
}


Restaurar código

Preciso de ajuda

Executar meu código


resposta:
function somaPonderada(array) {
  return array.reduce((acumulador, valor, indice) => acumulador + valor * (indice + 1), 0);
}

*/