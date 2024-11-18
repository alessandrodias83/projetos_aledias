import Button from "./evento/Button"

function Evento() {
    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }


    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
        </div>

    )
}

export default Evento