function encontrarPrimeiroMaiorQue200() {

    let produtos = [50, 100, 700, 1000];

    let primeiroMaiorQue200 = produtos.find(function(produto) {
        return produto > 200;
    });

    return primeiroMaiorQue200;
}

console.log(encontrarPrimeiroMaiorQue200());