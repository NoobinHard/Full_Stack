
import styles from "./ModoEscuro.module.css"
import { useState } from 'react'
function ModoEscuro(){
    const [modoNoturno, setModoNoturno] = useState(false)
    return (
        <div className={modoNoturno ?  styles.dark : styles.light}>
            <h1>Teste</h1>
            <p>Aqui é o conteúdo</p>
            <button className={styles.botao} onClick={() => setModoNoturno(!modoNoturno)}>Ligar/Desligar</button>
        </div>
    )
};
export default ModoEscuro