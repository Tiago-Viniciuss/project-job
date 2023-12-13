import React from 'react'
import '../style/ForgetPassword.css'
import { useNavigate } from 'react-router-dom';

const ForgetCompanyPassword = () => {

    const navigate = useNavigate()

function navigateToCompanyProfile() {
  navigate('/company-profile-login')
}


function createNewPassword(e) {

    e.preventDefault()

    let currentEmail = document.getElementById('validateCompanyEmail')
    let validateEmail = document.getElementById('validateEmail')
    let storedEmail = localStorage.getItem('companyEmail')
    let createNewPassword = document.getElementById('createNewPassword')

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

    let newPassword = document.getElementById('newPassword')
    let confirmPassword = document.getElementById('confirmNewPassword')

    let newPasswordText = String(newPassword.value)
    let confirmPasswordText = String(confirmPassword.value)
    
    if(newPasswordText == confirmPasswordText) {
        let removeOldPassword = localStorage.removeItem('companyPassword')
        let changeCompanyPassword = localStorage.setItem('companyPassword', confirmPasswordText)
        navigateToCompanyProfile()
    } else {
        alert('As duas senhas não coincidem')
    }

    

}


  return (
    <div>
        <section id='changeCompanyPassword'>
            <h1>
                Alteração da Password
            </h1>
            <form id='validateEmail' onSubmit={createNewPassword}>
                <input type="email" name="validateCompanyEmail" id="validateCompanyEmail" className='form-control' placeholder='Digite o email cadastrado'/>
                <input type="submit" value="Validar"  className='form-control btn btn-dark'/>
            </form>
            <form id='createNewPassword' onSubmit={changePassword}>
                <input type="password" name="newPassword" id="newPassword" className='form-control' placeholder='Insira a nova senha'/>
                <input type="password" name="confirmNewPassword" id="confirmNewPassword" className='form-control' placeholder='Confirme a nova senha'/>
                <input type="submit" value="Atualizar Senha" className='form-control btn btn-dark'/>
            </form>
        </section>
    </div>
  )
}

export default ForgetCompanyPassword