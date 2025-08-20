
import { useState} from 'react'
function Carrinho() {
    const[itens, setItens] = useState([])

    function adicionarItem (){
        const novoItem = {id: Date.now(), nome: `Produto #${itens.length + 1}`}
        setItens([...itens, novoItem])
    }
      return (
        <div>
            <h2>Carrinho({itens.length})</h2>
            <button onClick={adicionarItem}>Adicionar item</button>
        </div>
      )  
    
};
export default Carrinho