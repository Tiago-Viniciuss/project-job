import React, { useEffect, useState } from 'react'
import CandidateOptionsBar from '../components/CandidateOptionsBar'


const CandidateProfile = () => {

  const [candidateName, setCandidateName] = useState('Usuário')
  const [candidateBirthday, setCandidateBirthday] = useState('')
  const [candidateBirthdayFormated, setCandidateBirthdayFormated] = useState('')
  const [candidateLocation, setCandidateLocation] = useState('')

  useEffect(()=> {
    const storedCandidateName = localStorage.getItem('name')
    setCandidateName(storedCandidateName)
  })

  useEffect(() => {
    const storedBirthday = localStorage.getItem('candidateBirthday')

    setCandidateBirthdayFormated(storedBirthday)
  })

  useEffect(()=> {
    const storedLocation = localStorage.getItem('candidateLocation')
    const candidateLocation = document.getElementById('mainLocation')

    setCandidateLocation(storedLocation)
    candidateLocation.style.display = 'block'
  })


  function uploadPicture() {
    const uploadBox = document.getElementById('uploadPicture')

    uploadBox.classList.toggle('show')
  }

  function uploadDate() {
    const dateBirthday = document.getElementById('candidateBirthday')
    const editDate = document.getElementById('birthday')

    dateBirthday.style.display = 'block'
    editDate.style.display = 'none'
  }

  function uploadLocation() {
    const candidateLocation = document.getElementById('candidateLocation')
    const editLocation = document.getElementById('location')
    
    editLocation.style.display = 'none'
    candidateLocation.style.display = 'block'
    
  }

  
  function convertDate(candidateBirthday) {
    const [ano, mes, dia] = candidateBirthday.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  function saveData(e) {
    const formatedDate = convertDate(candidateBirthday)
    const location = document.getElementById('candidateLocation')
    const candidateLocation = String(location.value)
    localStorage.setItem('candidateBirthday', formatedDate)
    localStorage.setItem('candidateLocation', candidateLocation)

  }

  

  return (
    <div id='candidateProfileContainer'>
      <CandidateOptionsBar/>
      <section id='candidateInfo'>
      <h1>Seja Bem-vindo, <br /> {candidateName}!</h1>
        <div id='profilePicture'>

        </div>
          <hr />
          <p>{candidateName}</p>
          <hr />
          <div id='candidateBirthdayFormated'>
            <p>{candidateBirthdayFormated}</p>
            <hr />
          </div>
          <div id='mainLocation'>
            <p>{candidateLocation}</p>
            <hr />
          </div>
          <p>Profissão</p>
          <hr />
          <p>Escolaridade</p>
          <hr />
      </section>

      <section id='editCandidateProfile'>
          <h1>Editar Perfil do candidato</h1>
          <div id='profilePicture'>
          <span className='material-symbols-outlined' onClick={uploadPicture}>edit</span>
        </div>
          <div id='uploadPicture'>
            <input type="file" name="uploadPicture" id="uploadProfilePicture" />
            <label htmlFor="uploadProfilePicture" className='form-control'>Escolher nova foto</label>
            <button className='btn btn-dark'>Atualizar Foto</button>
          </div>
          <form id='saveDataForm' onSubmit={saveData}>
          <p className='form-control' id='birthday'>{candidateBirthdayFormated} <span className='material-symbols-outlined' onClick={uploadDate}>edit</span></p>
          <input
            type="date"
            name="candidateBirthday"
            id="candidateBirthday"
            className='form-control'
            value={candidateBirthday}
            onChange={(e) => setCandidateBirthday(e.target.value)}/>
            <p className='form-control' id='location'>{candidateLocation} <span className='material-symbols-outlined' onClick={uploadLocation}>edit</span></p>
            <input type="text" name="candidateLocation" id="candidateLocation" className='form-control' placeholder='Onde você mora?'/>
            <input type="text" name="candidateProfession" id="candidateProfession" className='form-control'/>
            <button type='submit'>Guardar</button>
          </form>
      </section>

      <section id='curriculumPage'>
        <h1>Seu currículo</h1>
      </section>
    </div>
  )
}

export default CandidateProfile