function algoritmoFiltrarProdutos() {
    let produtos = [1000, 50, 200];

    //filter - usar boelanos

    let produtosFiltrados = produtos.filter(function(produto) {
        return produto > 100;
    });

    console.log(produtosFiltrados)
}

algoritmoFiltrarProdutos();