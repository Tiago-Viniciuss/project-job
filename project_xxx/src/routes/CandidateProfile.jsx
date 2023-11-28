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

    function login() {
      let email = document.getElementById('userEmail')
      let password = document.getElementById('userPassword')

      let emailCheck = String(email.value)
      let passwordCheck = String(password.value)
      let emailStored = localStorage.getItem('email')
      let passwordStored = localStorage.getItem('password')

      if(emailCheck == emailStored && passwordCheck == passwordStored) {
        location.href = '/'

    } else {
        alert('Usuário ou senha incorreto')
    }

    }

  return (
    <div>
        <h3 className='loginProfileTitle'>
            Faça login e aproveite cada funcionalidade:
        </h3>
        <form onSubmit={handleSubmit} id='formCandidateProfile'>
            <input className='form-control' type="email" name="userEmail" id="userEmail" placeholder='Digite seu email' onChange={handleUserEmail} autoComplete='userEmail'/>
            <input className='form-control' type="password" name="userPassword" id="userPassword" placeholder='Insira sua senha' autoComplete='current-password'/>
            <input onClick={login} className='btn btn-dark' type="submit" value="Entrar" />
             
        </form>
        <Link to="/create-profile">
            <p className='createAccount'>Não tem cadastro? Crie sua conta aqui</p>
        </Link>
        <p className='forgetPassword'>Esqueceste-te da password?</p>
    </div>
  )
}

export default CandidateProfile