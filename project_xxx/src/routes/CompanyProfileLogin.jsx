import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/CompanyProfile.css'
import { useNavigate } from 'react-router-dom';


const CompanyProfileLogin = ({companyEmail}) => {

  const navigate = useNavigate()

  function navigateToCompanyProfile() {
    navigate('/company-profile')
}

    const [email, setEmail] = useState(companyEmail)

    const handleCompanyEmail = (e) => {
        setEmail(e.target.value)
      }

    function login(e) {

      e.preventDefault()

      let email = document.getElementById('companyEmail')
      let password = document.getElementById('companyPassword')

      let emailCheck = String(email.value)
      let passwordCheck = String(password.value)
      let emailStored = localStorage.getItem('companyEmail')
      let passwordStored = localStorage.getItem('companyPassword')

      if(emailCheck == emailStored && passwordCheck == passwordStored) {
        navigateToCompanyProfile()

    } else {
        alert('Usuário ou senha incorreto')
    }
    
    setEmail("")

    }

  return (
    <div>
        <h3 className='loginProfileTitle'>
            Crie vagas de emprego para sua empresa:
        </h3>
        <form onSubmit={login} id='formCompanyProfile'>
            <input className='form-control' type="email" name="companyEmail" id="companyEmail" placeholder='Digite seu email' onChange={handleCompanyEmail} autoComplete='companyEmail'/>
            <input className='form-control' type="password" name="companyPassword" id="companyPassword" placeholder='Insira sua senha' autoComplete='current-password'/>
            <input className='btn btn-dark' type="submit" value="Entrar" />
             
        </form>
        <Link to="/create-company-profile">
            <p className='createAccount'>Não tem cadastro? Crie sua conta aqui</p>
        </Link>
        <p className='forgetPassword'>Esqueceste-te da password?</p>
    </div>
  )
}

export default CompanyProfileLogin