import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/CandidateProfile.css'


const CandidateProfile = ({userEmail}) => {

    const [email, setEmail] = useState(userEmail)

    const handleUserEmail = (e) => {
        setEmail(e.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault() 
    
    
    setEmail("")
    
    }

    function fazerLogin() {
      let email = document.getElementById('userEmail')
      let senha = document.getElementById('userPassword')
      let saudacao = document.getElementById('saudacao')

      let emailCheck = String(email.value)
      let senhaCheck = String(senha.value)
      let emailGuardado = localStorage.getItem('email')
      let senhaGuardada = localStorage.getItem('senha')

      if(emailCheck == emailGuardado && senhaCheck == senhaGuardada) {
        location.href = '/'

    } else {
        alert('Usuário ou senha incorreto')
    }

    }

  return (
    <div>
        <h3 className='loginPerfilh3'>
            Faça login e aproveite cada funcionalidade:
        </h3>
        <form onSubmit={handleSubmit} id='formPerfilUsuario'>
            <input className='form-control' type="email" name="userEmail" id="userEmail" placeholder='Digite seu email' onChange={handleUserEmail} autoComplete='userEmail'/>
            <input className='form-control' type="password" name="userPassword" id="userPassword" placeholder='Insira sua senha' autoComplete='current-password'/>
            <input onClick={fazerLogin} className='btn btn-dark' type="submit" value="Entrar" />
             
        </form>
        <Link to="/create-profile">
            <p className='criarConta'>Não tem cadastro? Crie sua conta aqui</p>
        </Link>
        <p className='esqueciSenha'>Esqueceste-te da password?</p>
    </div>
  )
}

export default CandidateProfile