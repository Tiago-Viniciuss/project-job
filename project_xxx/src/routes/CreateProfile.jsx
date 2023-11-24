import React from 'react'
import { useState } from 'react'
import '../style/CandidateProfile.css'

const CreateProfile = () => {

    
    const handleSubmit = (e) => {
        e.preventDefault() 
    }


    function salvarDados() {

      let nome = document.getElementById('userName')
      let email = document.getElementById('userEmail')
      let senha = document.getElementById('userPassword')

      let nomeGuardado = String(nome.value)
      let emailGuardado = String(email.value)
      let senhaGuardada = String(senha.value)

      if (nomeGuardado.length != 0 && emailGuardado.length != 0 && senhaGuardada.length != 0) {
        alert(`Parabéns, ${nomeGuardado}, sua conta foi criada!`)
        localStorage.setItem ('nome', nomeGuardado)
        localStorage.setItem ('email', emailGuardado)
        localStorage.setItem ('senha', senhaGuardada)
        location.href = '/perfil-do-usuario';
      } else {
        alert (`Preencha os dados corretamente!`)
      }

      

      
    }


  return (
    <div>
        <h3 className='criarContah3'>Seja bem-vindo ao Projeto City!</h3>
        <form id='formCriarConta' onSubmit={handleSubmit}>
            <input className='form-control' type="text" name="userName" id="userName" placeholder='Digite seu nome completo' required  autoComplete='userName'/>

            <input className='form-control' type="email" name="userEmail" id="userEmail" placeholder='Digite seu melhor email' required/>

            <input className='form-control' type="password" name="userPassword" id="userPassword" placeholder='Crie uma senha com letras e números' autoComplete='current-password' required pattern="^(?=.*[a-z])(?=.*[0-9]).{8,}$"
             title="A senha deve conter letras minúsculas, números e no mínimo 8 caracteres" />

            <input onClick={salvarDados} className='btn btn-dark' type="submit" value="Criar Conta" />
            
        </form>
    </div>
  )
}

export default CreateProfile
