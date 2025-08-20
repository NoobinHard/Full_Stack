
import { useState} from 'react'
function Carrinho() {
    const[itens, setItens] = useState([])

    const incrementarCarrinho = () =>{
        const novoItem = {id: Date.now(), nome: `Produto #${itens.length + 1}`}
        setItens([...itens, novoItem])
    }
      return (
        <div>
            <h2>Carrinho({itens.length})</h2>
            <button onClick={incrementarCarrinho}>Adicionar item</button>
        </div>
      )  
    
};
export default Carrinho