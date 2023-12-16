import React, { useEffect, useState } from 'react'
import CandidateOptionsBar from '../components/CandidateOptionsBar'
import Header from '../components/Header'


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
    const uploadDate = document.getElementById('uploadDate')
    const editDate = document.getElementById('birthday')

    uploadDate.style.display = 'block'
    editDate.style.display = 'none'
  }

  function uploadLocation() {
    const uploadLocation = document.getElementById('uploadLocation')
    const editLocation = document.getElementById('location')
    
    editLocation.style.display = 'none'
    uploadLocation.style.display = 'block'
    
  }

  
  function convertDate(candidateBirthday) {
    const [ano, mes, dia] = candidateBirthday.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  function saveDate() {
    const formatedDate = convertDate(candidateBirthday)
    
    localStorage.setItem('candidateBirthday', formatedDate)
    

  }

  function saveLocation(e) {
    const uploadLocation = document.getElementById('uploadLocation')
    const editLocation = document.getElementById('location')
    const location = document.getElementById('candidateLocation')
    const candidateLocation = String(location.value)

    editLocation.style.display = 'block'
    uploadLocation.style.display = 'none'
    localStorage.setItem('candidateLocation', candidateLocation)
  }

  

  return (
    <div id='candidateProfileContainer'>
      <Header/>
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
          <p className='form-control' id='birthday'>{candidateBirthdayFormated} <span className='material-symbols-outlined' onClick={uploadDate}>edit</span></p>
          <div id='uploadDate'>
            <form onSubmit={saveDate}>
              <input
              required
                type="date"
                name="candidateBirthday"
                id="candidateBirthday"
                className='form-control'
                value={candidateBirthday}
                onChange={(e) => setCandidateBirthday(e.target.value)}/>
                <button type='submit' className="btn btn-dark" >Atualizar Data</button>
            </form>
          </div>
            <p className='form-control' id='location'>{candidateLocation} <span className='material-symbols-outlined' onClick={uploadLocation}>edit</span></p>
            <div id='uploadLocation'>
              <form onSubmit={saveLocation}>
                <input required type="text" name="candidateLocation" id="candidateLocation" className='form-control' placeholder='Onde você mora?'/>
                <button type='submit' className="btn btn-dark" >Atualizar Morada</button>
              </form>
            </div>
            <input type="text" name="candidateProfession" id="candidateProfession" className='form-control' placeholder='Qual a sua profissão?'/>
      </section>
    </div>
  )
}

export default CandidateProfile