function Pessoa(nome, idade, profisao, foto) {
    return (
        <div>
            <img src={foto} alt={props.nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profisao}</p>
        </div>
    )
}

export default Pessoa