
import { useState } from 'react'

function Faq() {
    const [estaAberto, setEstaAberto] = useState(false)
    return (
        <div>
            <h3 onClick={()=> setEstaAberto(!estaAberto)}  style={{cursor: 'pointer'}}>
                Que dia é hoje?
            </h3>
            {estaAberto && <p>Hoje é quarta-feira</p>}
            
        </div>
    )
};
export default Faq