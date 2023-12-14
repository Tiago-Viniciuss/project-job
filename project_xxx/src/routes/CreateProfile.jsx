import React from 'react'
import { useState, useEffect} from 'react'
import '../style/CandidateProfile.css'
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {

  const [candidateBirthday, setCandidateBirthday] = useState('')
  const [candidateBirthdayFormated, setCandidateBirthdayFormated] = useState('')

  const navigate = useNavigate();

  function navigateToCandidateProfileLogin() {
      navigate('/candidate-profile-login')
  }

  useEffect(() => {
    const storedBirthday = localStorage.getItem('candidateBirth')

    setCandidateBirthdayFormated(storedBirthday)
  })

  function convertDate(candidateBirthday) {
    const [ano, mes, dia] = candidateBirthday.split('-');
    return `${dia}/${mes}/${ano}`;
  }
    
    const handleSubmit = (e) => {
        e.preventDefault() 
    }


    function saveData() {

      const formatedDate = convertDate(candidateBirthday)
      let name = document.getElementById('userName')
      let email = document.getElementById('userEmail')
      let password = document.getElementById('userPassword')
      const location = document.getElementById('candidateCity')
      
      const candidateLocation = String(location.value)
      let storageName = String(name.value)
      let storageEmail = String(email.value)
      let storagePassword = String(password.value)

      if (storageName.length != 0 && storageEmail.length != 0 && storagePassword.length != 0) {
        alert(`Parabéns, ${storageName}, sua conta foi criada!`)
        localStorage.setItem ('name', storageName)
        localStorage.setItem ('email', storageEmail)
        localStorage.setItem('candidateBirthday', formatedDate)
        localStorage.setItem('candidateLocation', candidateLocation)
        localStorage.setItem ('password', storagePassword)
        navigateToCandidateProfileLogin()
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

            <input
            type="date"
            name="candidateBirth"
            id="candidateBirth"
            className='form-control'
            value={candidateBirthday}
            onChange={(e) => setCandidateBirthday(e.target.value)}/>

            <input type="text" name="candidateCity" id="candidateCity" className='form-control' placeholder='Em que cidade vives?' required/>

            <input className='form-control' type="password" name="userPassword" id="userPassword" placeholder='Crie uma senha com letras e números' autoComplete='current-password' required pattern="^(?=.*[a-z])(?=.*[0-9]).{8,}$"
             title="A senha deve conter letras minúsculas, números e no mínimo 8 caracteres" />

            <input onClick={saveData} className='btn btn-dark' type="submit" value="Criar Conta" />
            
        </form>
    </div>
  )
}

export default CreateProfile
