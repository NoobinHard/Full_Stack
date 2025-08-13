import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao'
import Rodape from './components/Rodape'
import Alerta from './components/Alerta/Alerta'

function App() {
 /*  const nome = "José"
  const profissao = "Pedreiro" */




  return (
    <div >
      <h1>Aula de react</h1>
      <Saudacao/>
      <Rodape/>
      <Alerta/> 
      

    </div>
    
  )   
  }

  


export default App
