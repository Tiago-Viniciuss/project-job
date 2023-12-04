import React from 'react'
import { useState } from 'react'
import '../style/CompanyProfile.css'
import { useNavigate } from 'react-router-dom';

const CreateCompanyProfile = () => {


  const navigate = useNavigate();

  function navigateToCompanyProfileLogin() {
      navigate('/company-profile-login')
  }



    function saveData(e) {

      e.preventDefault() 

      let name = document.getElementById('companyName')
      let email = document.getElementById('companyEmail')
      let password = document.getElementById('companyPassword')

      let storageName = String(name.value)
      let storageEmail = String(email.value)
      let storagePassword = String(password.value)

      if (storageName.length != 0 && storageEmail.length != 0 && storagePassword.length != 0) {
        alert(`Parabéns, a conta para ${storageName} foi criada!`)
        localStorage.setItem ('companyName', storageName)
        localStorage.setItem ('companyEmail', storageEmail)
        localStorage.setItem ('companyPassword', storagePassword)
        navigateToCompanyProfileLogin()
      } else {
        alert (`Preencha os dados corretamente!`)
      }

      

      
    }


  return (
    <div>
        <h3 className='createCompanyAccountTitle'>Cadastre vossa empresa!</h3>
        <form id='createCompanyAccount' onSubmit={saveData}>
            <input className='form-control' type="text" name="companyName" id="companyName" placeholder='Digite o nome da empresa' required  autoComplete='companyName'/>

            <input className='form-control' type="email" name="companyEmail" id="companyEmail" placeholder='Digite o email da empresa' autoComplete='companyEmail' required/>

            <input className='form-control' type="password" name="companyPassword" id="companyPassword" placeholder='Crie uma senha com letras e números' autoComplete='current-password' required pattern="^(?=.*[a-z])(?=.*[0-9]).{8,}$"
             title="A senha deve conter letras minúsculas, números e no mínimo 8 caracteres" />

            <input className='btn btn-dark' type="submit" value="Criar Conta" />
            
        </form>
    </div>
  )
}

export default CreateCompanyProfile
