import React, { useEffect, useState } from 'react'
import CandidateOptionsBar from '../components/CandidateOptionsBar'
import Header from '../components/Header'


const CandidateProfile = () => {

  const [candidateName, setCandidateName] = useState('Usuário')
  const [candidateBirthday, setCandidateBirthday] = useState('')
  const [candidateBirthdayFormated, setCandidateBirthdayFormated] = useState('')
  const [candidateLocation, setCandidateLocation] = useState('')
  const [candidateProfession, setCandidateProfession] = useState('')

  const [candidateEducation, setCandidateEducation] = useState('')

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

  useEffect(()=> {
    const storedProfession = localStorage.getItem('candidateProfession')
    const candidateProfession = document.getElementById('candidateProfession')

    setCandidateProfession(storedProfession)
    candidateProfession.style.display = 'block'
  })

  useEffect(()=> {
    const storedEducation = localStorage.getItem('candidateEducation')
    const candidateEducation = document.getElementById('candidateEducation')

    setCandidateEducation(storedEducation)
    candidateEducation.style.display = 'block'
  })


  function uploadPicture() {
    const uploadBox = document.getElementById('uploadPicture')

    uploadBox.classList.toggle('show')
  }

  function uploadDate() {
    const uploadDate = document.getElementById('uploadDate')
    const editDate = document.getElementById('birthdayContainer')

    uploadDate.style.display = 'block'
    editDate.style.display = 'none'
  }

  function uploadLocation() {
    const uploadLocation = document.getElementById('uploadLocation')
    const editLocation = document.getElementById('locationContainer')
    
    editLocation.style.display = 'none'
    uploadLocation.style.display = 'block'
    
  }

  function uploadProfession() {
    const uploadProfession = document.getElementById('uploadProfession')
    const editProfession = document.getElementById('professionContainer')
    
    editProfession.style.display = 'none'
    uploadProfession.style.display = 'block'
  }

  function uploadEducation() {
    const uploadEducation = document.getElementById('uploadEducation')
    const editEducation = document.getElementById('educationContainer')
    
    editEducation.style.display = 'none'
    uploadEducation.style.display = 'block'
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

  function saveProfession(e) {
    const uploadProfession = document.getElementById('uploadProfession')
    const editProfession = document.getElementById('professionContainer')
    const profession = document.getElementById('candidateProfession')
    const candidateProfession = String(profession.value)

    editProfession.style.display = 'block'
    uploadProfession.style.display = 'none'
    localStorage.setItem('candidateProfession', candidateProfession)
  }

  function saveEducation(e) {
    const uploadEducation = document.getElementById('uploadEducation')
    const editEducation = document.getElementById('educationContainer')
    const education = document.getElementById('candidateEducation')
    const candidateEducation = String(education.value)

    editEducation.style.display = 'block'
    uploadEducation.style.display = 'none'
    localStorage.setItem('candidateEducation', candidateEducation)
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
          <p>{candidateProfession}</p>
          <hr />
          <p>{candidateEducation}</p>
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
          <div id='birthdayContainer' className='editCandidateProfileContainer'>
            <p className='form-control' id='birthday'>{candidateBirthdayFormated} 
            </p>
            <span className='material-symbols-outlined' onClick={uploadDate}>edit</span>
          </div>
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
            <div id='locationContainer' className='editCandidateProfileContainer'>
              <p className='form-control' id='location'>{candidateLocation} </p>
              <span className='material-symbols-outlined' onClick={uploadLocation}>edit</span>
            </div>
            <div id='uploadLocation'>
              <form onSubmit={saveLocation}>
                <input required type="text" name="candidateLocation" id="candidateLocation" className='form-control' placeholder='Onde você mora?'/>
                <button type='submit' className="btn btn-dark" >Atualizar Morada</button>
              </form>
            </div>

            <div id='professionContainer' className='editCandidateProfileContainer'>
              <p className='form-control' id='profession'>{candidateProfession}</p>
              <span className='material-symbols-outlined' onClick={uploadProfession}>edit</span>
            </div>
            <div id='uploadProfession'>
              <form onSubmit={saveProfession}>
                <input required type="text" name="candidateProfession" id="candidateProfession" className='form-control' placeholder='Qual a vossa profissão?'/>
                <button type='submit' className="btn btn-dark" >Atualizar Profissão</button>
              </form>
            </div>

            <div id='educationContainer' className='editCandidateProfileContainer'>
              <p className='form-control' id='education'>{candidateEducation} </p>
              <span className='material-symbols-outlined' onClick={uploadEducation}>edit</span>
            </div>
            <div id='uploadEducation'>
              <form onSubmit={saveEducation}>
              <select required name="candidateEducation" id="candidateEducation" className='form-control'>
              <option value="Não qualificado">Não qualificado</option>
              <option value="Qualificado">Qualificado</option>
              <option value="Estudante">Estudante</option>
              <option value="Ensino Superior">Ensino Superior</option>
              <option value="Mestrado">Mestrado</option>
              <option value="Licenciado">Licenciado</option>
            </select>
                <button type='submit' className="btn btn-dark" >Atualizar Escolaridade</button>
              </form>
            </div>

      </section>
    </div>
  )
}

export default CandidateProfile