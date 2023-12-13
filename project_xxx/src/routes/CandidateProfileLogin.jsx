import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import '../style/CandidateProfile.css'


const CandidateProfileLogin = ({userEmail}) => {

    const navigateToProfile = useNavigate()

    const [email, setEmail] = useState(userEmail)

    const handleUserEmail = (e) => {
        setEmail(e.target.value)
      }

      function login(e) {
        e.preventDefault()
  
        let email = document.getElementById('userEmail')
        let password = document.getElementById('userPassword')
  
        let emailCheck = String(email.value)
        let passwordCheck = String(password.value)
        let emailStored = localStorage.getItem('email')
        let passwordStored = localStorage.getItem('password')
  
        if(emailCheck == emailStored && passwordCheck == passwordStored) {
         navigateToProfile('/candidate-profile')
  
      } else {
          alert('Usuário ou senha incorreto')
      }
    
    
    setEmail("")
    
    }

  return (
    <div id='candidateProfileLoginContainer'>
        <h3 className='loginProfileTitle'>
            Faça login e aproveite cada funcionalidade:
        </h3>
        <form onSubmit={login} id='formCandidateProfile'>
            <input className='form-control' type="email" name="userEmail" id="userEmail" placeholder='Digite seu email' onChange={handleUserEmail} autoComplete='userEmail'/>
            <input className='form-control' type="password" name="userPassword" id="userPassword" placeholder='Insira sua senha' autoComplete='current-password'/>
            <input className='btn btn-dark' type="submit" value="Entrar" />
             
        </form>
        <Link to="/create-profile">
            <p className='createAccount'>Não tem cadastro? Crie sua conta aqui</p>
        </Link>
        <Link to={'/forget-candidate-password'}>
          <p className='forgetPassword'>Esqueceste-te da password?</p>
        </Link>
    </div>
  )
}

export default CandidateProfileLogin