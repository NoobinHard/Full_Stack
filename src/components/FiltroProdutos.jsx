import { useState } from 'react'

function FiltroProdutos() {
    const [termoBusca, setTermoBusca] = useState('')
    return(
        <div>
            <input type="Text" value={termoBusca}
            onChange = {(e) => setTermoBusca(e.target.value)} placeholder="Exemplo"/>
            <p>Prucurando por {termoBusca}...</p>
        </div>
    )
};
export default FiltroProdutos