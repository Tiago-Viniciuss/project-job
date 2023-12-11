import React, { useEffect, useState } from 'react'
import CreateAd from '../routes/CreateAd'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CompanyProfile = () => {

      const [companyTitle, setCompanyTitle] = useState('')

      useEffect(()=> {
        const companyTitleStored = localStorage.getItem('companyTitle')

        setCompanyTitle((companyTitleStored))
      })

      let [companyCategory, setCompanyCategory] = useState('')

      useEffect(()=> {
        let companyCategoryStored = localStorage.getItem('companyCategory')
        setCompanyCategory((companyCategoryStored))
      })

      const [companyDescription, setCompanyDescription] = useState('')

      useEffect(()=> {
        const CompanyDescriptionStored = localStorage.getItem('companyDescription')

        setCompanyDescription((CompanyDescriptionStored))
      })


      function openContainer() {
        const createAd = document.getElementById('createAdContainer')
        const  button = document.getElementById('createJobsButton')

        createAd.classList.toggle('active')

        if (createAd.className == 'active') {
          button.style.display = 'none'
        } else {
          button.style.display = 'block'
        }
        
      }


  return (
    <div id='companyProfileInfo'>
      <Header/>
        <h1 id='companyTitle'>{companyTitle}</h1>
        <h3 id='companyCategory'>{companyCategory}</h3>
        <p id='companyDescription'>
            <strong>Descrição</strong> <br/>
                {companyDescription}
        </p>
        <section id='createJobs'>
          <button className='btn btn-dark' id='createJobsButton' onClick={openContainer}>
            Criar Vaga de Emprego
          </button>
          <div id='createAdContainer'>
              <CreateAd/>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default CompanyProfile