function algoritmoFiltrarProdutos() {
    let produtos = [1000, 50, 200];

    //filter - usar boelanos

    let produtosFiltrados = produtos.filter(function(produto) {
        return produto > 100;
    });

    console.log(produtosFiltrados)
}

algoritmoFiltrarProdutos();

/*
Exercicios 
ex: 01 - Maiores Que 100
Implemente a função ao lado que recebe um array de números inteiros positivos e retorna um novo array contendo apenas os números que são maiores que 100. Utilize o método filter() para realizar a filtragem.

Exemplos:
Se for passado array=[150, 50, 200, 99, 101], deve retornar [150, 200, 101] porque apenas esses números são maiores que 100
Se for passado array=[10, 20, 30, 40, 90], deve retornar [] porque nenhum número é maior que 100

Resposta:
function maioresQueCem(array) {
     let produtosFiltrados = array.filter(function(numero) {
        return numero > 100;
    });
    return produtosFiltrados;
}


ex: 02 - Filtra Eletrônico
Implemente a função ao lado que recebe um array de objetos que representam produtos. Cada produto tem as propriedades nome, preco, e categoria. A função deve usar o método filter() para retornar um novo array contendo somente os produtos da categoria "Eletrônica". Você não deve usar comandos condicionais (como if-else e switch-case) neste exercício.

Exemplos:
Se for passado produtos=[{nome: "Teclado", preco: 50.0, categoria: "Eletrônica"}, {nome: "Geladeira", preco: 1500.0, categoria: "Eletrodomésticos"}, {nome: "Fone de ouvido", preco: 100.0, categoria: "Eletrônica"}], deve retornar [{nome: "Teclado", preco: 50.0, categoria: "Eletrônica"}, {nome: "Fone de ouvido", preco: 100.0, categoria: "Eletrônica"}]
Se for passado produtos=[{nome: "Panela", preco: 80.0, categoria: "Cozinha"}, {nome: "Secador de cabelo", preco: 120.0, categoria: "Beleza"}], deve retornar [ ] porque nenhum produto é da categoria "Eletrônica"

resposta:
function filtraEletronicos(produtos) {
  return produtos.filter(produto => produto.categoria === "Eletrônica")
}

Ex: 03 - Triplica Valores Positivos
Implemente a função ao lado que recebe um array de números inteiros. A função deve retornar um novo array contendo apenas os números positivos triplicados (multiplicados por três).

Restrições:
não usar loops for/while/do-while.
não usar forEach, mas outras HOFs de array podem ser usadas.
Exemplos:
Se for passado array=[-1, 2, 5, -3, 0], deve retornar [6, 15] porque apenas 2 e 5 são positivos e triplicados dão 6 e 15, respectivamente.
Se for passado array=[0, -7, -4], deve retornar [ ] porque não há números positivos.
Dica
Pense qual operação deve ser feita aqui, será um map() ou filter() ? Ou será que é mais de uma operação ?

resposta:
function triplicarValoresPositivos(array) {
  return array
  .filter(numero => numero > 0)
  .map(numero => numero * 3)
}

*/