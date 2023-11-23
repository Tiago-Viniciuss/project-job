import React from 'react'
import '../style/JobBox.css'

const JobBox = () => {

  return (
    <div>
        <main id='jobs'>
          <div id='jobBox'>
            <div id='jobImageTitle'>
              <div id='jobImage'></div>
              <div id='jobTitle'>
                <h1>Auxiliar de Almoxarifado</h1>
                <h6>Continente LTDA.</h6>
              </div>
            </div>
            <div id='jobInfo'>
              <ul>
                <li id='jobType'>Presencial</li>
                <li id='jobHour'>Part-time</li>
                <li id='jobHour'>Part-time</li>
                <li id='jobLocation'>Lisboa</li>
                <li id='jobLocation'>Lisboa</li>
                <li id='jobDate'>22/11/2023</li>
              </ul>
            </div>
          </div>
        </main>
        <hr />
    </div>
  )
}

export default JobBox