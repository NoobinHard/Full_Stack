import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao'
import Rodape from './components/Rodape'
import Alerta from './components/Alerta/Alerta'
import LoginButton from './components/LoginButton/LoginButton'
import EmailInput from './components/EmailInput/EmailInput'
import PasswordInput from './components/PasswordInput'
import EmailField from './components/EmailField/EmailField'
import PassworldField from './components/PasswordField/PasswordField'
import LoginForm from './components/LoginForm/LoginForm'
import Contador from './components/Contador'
import FormularioContato from './components/FormularioContato'
import FiltroProdutos from './components/FiltroProdutos'
import ModoEscuro from './components/ModoEscuro/ModoEscuro'
import Carrinho from './components/Carrinho/Carrinho'
import Faq from './components/Faq/Faq'

function App() {
 /*  const nome = "José"
  const profissao = "Pedreiro" */




  return (
    <div >
      {/* <h1 id="glysera">Glysera</h1>
      <h2 id="tituloPagina">Controle de acesso</h2> */}
      {/* <Saudacao/>
      <Rodape/>
      <Alerta/> 

      <EmailInput/>
      <EmailField/>
      <PassworldField/>
      <PasswordInput/>
      <LoginButton/>
       */}
   {/*  <LoginForm/> */}
      <Contador/>
      <hr></hr>
      <FormularioContato/>
      <FiltroProdutos/>
      <ModoEscuro/>
      <Carrinho/>
      <Faq/>
    </div>
    
  )   
  }

  


export default App
