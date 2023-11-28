import React from 'react'
import { useState } from 'react'
import '../style/CandidateProfile.css'

const CreateProfile = () => {

    
    const handleSubmit = (e) => {
        e.preventDefault() 
    }


    function saveData() {

      let name = document.getElementById('userName')
      let email = document.getElementById('userEmail')
      let password = document.getElementById('userPassword')

      let storageName = String(name.value)
      let storageEmail = String(email.value)
      let storagePassword = String(password.value)

      if (storageName.length != 0 && storageEmail.length != 0 && storagePassword.length != 0) {
        alert(`Parabéns, ${storageName}, sua conta foi criada!`)
        localStorage.setItem ('name', storageName)
        localStorage.setItem ('email', storageEmail)
        localStorage.setItem ('password', storagePassword)
        location.href = '/candidate-profile';
      } else {
        alert (`Preencha os dados corretamente!`)
      }

      

      
    }


  return (
    <div>
        <h3 className='createAccountTitle'>Seja bem-vindo ao Emprego!</h3>
        <form id='formCreateAccount' onSubmit={handleSubmit}>
            <input className='form-control' type="text" name="userName" id="userName" placeholder='Digite seu nome completo' required  autoComplete='userName'/>

            <input className='form-control' type="email" name="userEmail" id="userEmail" placeholder='Digite seu melhor email' autoComplete='userEmail' required/>

            <input className='form-control' type="password" name="userPassword" id="userPassword" placeholder='Crie uma senha com letras e números' autoComplete='current-password' required pattern="^(?=.*[a-z])(?=.*[0-9]).{8,}$"
             title="A senha deve conter letras minúsculas, números e no mínimo 8 caracteres" />

            <input onClick={saveData} className='btn btn-dark' type="submit" value="Criar Conta" />
            
        </form>
    </div>
  )
}

export default CreateProfile
