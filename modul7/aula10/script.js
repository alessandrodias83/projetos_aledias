function encontrarPrimeiroMaiorQue200() {

    let produtos = [50, 100, 700, 1000];

    let primeiroMaiorQue200 = produtos.find(function(produto) {
        return produto > 200;
    });

    return primeiroMaiorQue200;
}

console.log(encontrarPrimeiroMaiorQue200());

/*
Exercicios 

ex: 01 - Primeiro Maior Que 200
Implemente a função ao lado que recebe um array de números inteiros positivos e retorna o primeiro número do array que é maior que 200. Se não houver números maiores que 200, retorne undefined. Utilize o método find() para realizar a busca, e não use comandos condicionais (como if-else e switch-case).

Exemplos:
Se for passado array=[150, 50, 300, 99, 1000], deve retornar 300 porque 300 e 1000 são números maiores que 200, e o

resposta:
function primeiroMaiorQue200(array) {
  return array.find(numero => numero > 200);
}


ex: 02 - Primeiro Produto Eletrônico
Implemente a função ao lado que recebe um array de objetos que representam produtos. Cada produto tem as propriedades "nome", "preco", e "categoria". A função deve usar o método find() para retornar o primeiro produto da categoria "Eletrônica". Se não houver produtos dessa categoria, retorne undefined. Você não deve usar comandos condicionais (como if-else e switch-case) neste exercício.

Exemplos:
Se for passado produtos=[{nome: "Teclado", preco: 50.0, categoria: "Eletrônica"}, {nome: "Geladeira", preco: 1500.0, categoria: "Eletrodomésticos"}, {nome: "Fone de ouvido", preco: 100.0, categoria: "Eletrônica"}], deve retornar {nome: "Teclado", preco: 50.0, categoria: "Eletrônica"}
Se for passado produtos=[{nome: "Panela", preco: 80.0, categoria: "Cozinha"}, {nome: "Secador de cabelo", preco: 120.0, categoria: "Beleza"}], deve retornar undefined porque nenhum produto é da categoria "Eletrônica"

resposta:
function primeiroProdutoEletronico(produtos) {
   return produtos.find(produto => produto.categoria === "Eletrônica");
}

*/