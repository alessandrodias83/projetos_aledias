import styles from './Frase.modules.css'

function Frase() {

    return (

        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
        </div>
       
    )
}

export default Frase

/*Este componente é reutilizavel, estou chamando ele no arquivo HelloWord.js */