import React from 'react'
import '../style/JobBox.css'

const JobBox = () => {

  function saveJob() {
    const saveButton = document.getElementById('saveJobButton')
    const saveSymbol = document.getElementById('saveJobSymbol')
    const saveTitle = document.getElementById('saveButtonTitle')

      saveButton.classList.toggle('saved')

      if (saveButton.className == 'saved') {
        saveTitle.innerText = 'Salvo'
        saveSymbol.innerText = 'bookmark'
      } else {
        saveTitle.innerText = 'Salvar'
        saveSymbol.innerText = 'bookmark_add'
      }
      
      
  }

  return (
    <div>
        <main id='jobs'>
          <div id='jobBox'>
              <div id='jobTitle'>
                <h1>Auxiliar de Almoxarifado</h1>
                <h6>Continente LTDA.</h6>
              </div>
            <div id='jobInfo'>
              <ul>
                <li id='workPlace'> <span className='material-symbols-outlined'>badge</span> Presencial</li>
                <li id='jobsType'> <span className='material-symbols-outlined'>schedule</span> Part-time</li>
                <li id='jobsTerm'> <span className='material-symbols-outlined'>contract</span> A Termo</li>
                <li id='jobLocation'> <span className='material-symbols-outlined'>location_on</span> Lisboa</li>
                <li id='jobDate'> <span className='material-symbols-outlined'>calendar_today</span> 22/11/2023</li>
              </ul>
              <div id='jobImage' className='material-symbols-outlined'>apartment</div>
            </div>
            <div id='companyDescription'>
                <p>
                  Rede de Supermercados a nível nacional com grande impacto e influência na vida dos consumidores.
                </p>
            </div>
            <div id='saveApplyButtons'>
              <button id='saveJobButton' onClick={saveJob}>
                <p id='saveButtonTitle'>
                  Salvar
                </p>
                <span className='material-symbols-outlined' id='saveJobSymbol'>
                  bookmark
                </span>
              </button>
              <button id='applyCV'>
                Aplicar
              </button>
            </div>
          </div>
        </main>
        <hr />
    </div>
  )
}

export default JobBox