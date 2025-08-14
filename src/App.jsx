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

function App() {
 /*  const nome = "José"
  const profissao = "Pedreiro" */




  return (
    <div >
      <h1>Aula de react</h1>
      {/* <Saudacao/>
      <Rodape/>
      <Alerta/> 

      <EmailInput/>
      <EmailField/>
      <PassworldField/>
      <PasswordInput/>
      <LoginButton/>
       */}
    <LoginForm/>

    </div>
    
  )   
  }

  


export default App
