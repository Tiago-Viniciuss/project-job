import React from 'react'
import '../style/ForgetCandidatePassword.css'
import { useNavigate } from 'react-router-dom';

const ForgetCandidatePassword = () => {

    const navigate = useNavigate()

function navigateToCandidateProfile() {
  navigate('/candidate-profile-login')
}


function createNewCandidatePassword(e) {

    e.preventDefault()

    let currentEmail = document.getElementById('validateCandidateEmail')
    let validateEmail = document.getElementById('candidateEmail')
    let storedEmail = localStorage.getItem('email')
    let createNewPassword = document.getElementById('createNewCandidatePassword')

    let currentEmailText = String(currentEmail.value)

    if(currentEmailText == storedEmail) {
        createNewPassword.style.visibility = 'visible'
        validateEmail.style.display = 'none'

    } else {
        alert('Não conseguimos encontrar seu email')
    }
    
}

function changePassword(e) {

    e.preventDefault()

    let newPassword = document.getElementById('newCandidatePassword')
    let confirmPassword = document.getElementById('confirmNewCandidatePassword')

    let newPasswordText = String(newPassword.value)
    let confirmPasswordText = String(confirmPassword.value)
    
    if(newPasswordText == confirmPasswordText) {
        let removeOldPassword = localStorage.removeItem('password')
        let changeCandidatePassword = localStorage.setItem('password', confirmPasswordText)
        navigateToCandidateProfile()
    } else {
        alert('As duas senhas não coincidem')
    }

    

}


  return (
    <div>
        <section id='changeCandidatePassword'>
            <h1>
                Alteração da Password
            </h1>
            <form id='candidateEmail' onSubmit={createNewCandidatePassword}>
                <input type="email" name="validateCandidateEmail" id="validateCandidateEmail" className='form-control' placeholder='Digite o vosso email cadastrado'/>
                <input type="submit" value="Validar"  className='form-control btn btn-dark'/>
            </form>
            <form id='createNewCandidatePassword' onSubmit={changePassword}>
                <input type="password" name="newPassword" id="newCandidatePassword" className='form-control' placeholder='Insira uma nova senha'/>
                <input type="password" name="confirmNewPassword" id="confirmNewCandidatePassword" className='form-control' placeholder='Confirme a nova senha'/>
                <input type="submit" value="Atualizar Senha" className='form-control btn btn-dark'/>
            </form>
        </section>
    </div>
  )
}

export default ForgetCandidatePassword