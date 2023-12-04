import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/CreateAd.css'


const CreateAd = () => {


  const [workPlaceSelected, setWorkPlaceSelected] = useState('')

  const handleWorkPlaceChange = (event) => {

    setWorkPlaceSelected(event.target.value)
  }

  const [jobTypeSelected, setJobTypeSelected] = useState('')

  const handleJobTypeChange = (event) => {

    setJobTypeSelected(event.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault() 
    location.href = '/'
}

  function createAd() {
    let title = document.getElementById('adTitle')
    let companyName = document.getElementById('companyName')
    let category = document.getElementById('chooseCategory')
    let location = document.getElementById('adCity')
    let description = document.getElementById('description')

    let adTitle = String(title.value) 
    let adCompanyName = String(companyName.value)
    let adCategory = String(category.value)
    let adLocation = String(location.value)
    let adDescription = String(description.value)

    localStorage.setItem('adTitle', adTitle)
    localStorage.setItem('companyName', adCompanyName)
    localStorage.setItem('adCategory', adCategory)
    localStorage.setItem('adLocation', adLocation)
    localStorage.setItem('workPlace', workPlaceSelected)
    localStorage.setItem('jobType', jobTypeSelected)
    localStorage.setItem('adDescription', adDescription)

  }
  
  

  return (
    <div>
        <h1 className='criarAnuncioTitulo'>
            Criar Vaga
        </h1>
        
        <form className='form-control' id='createAd' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="adTitle">Título do anúncio</label> <br />
            <input type="text" className='form-control' name="adTitle" id="adTitle" />
          </div>
          <div>
            <label htmlFor="companyName">Nome da Empresa</label> <br />
            <input type="text" className='form-control' name="companyName" id="companyName" />
          </div>
          <div>
            <label htmlFor="chooseCategory">Ramo de Atuação</label> <br />
            <select name="chooseCategory" id="chooseCategory" className='form-control'>
              <option value="" disabled>-- Escolha uma categoria --</option>
              <option value="adm">Administrativo e Secretariado</option>
              <option value="agro">Agricultura e Jardinagem</option>
              <option value="assistence">Assistente de Loja e Caixa</option>
              <option value="callCenter">Call Center, Helpdesk e Telemarketing</option>
              <option value="">Cargos Executivos</option>
              <option value="">Comercial</option>
              <option value="">Construção Civil</option>
              <option value="count">Contabilidade, Fiscalidade e Finanças</option>
              <option value="sports">Desportos e Fitness</option>
              <option value="cleaning">Domésticos e Limpeza</option>
              <option value="education">Formação, Ensino e Educação</option>
              <option value="industrial">Industrial, Fabrico e Confecção Têxtil</option>
              <option value="it">IT e Telecomunicações</option>
              <option value="marketing">Marketing, Publicidade e Eventos</option>
              <option value="hotel">Restauração, Hotelaria e Turismo</option>
              <option value="security">Segurança e Vigilância</option>
              <option value="socialService">Serviço Social e Voluntariado</option>
              <option value="health">Saúde e Beleza</option>
              <option value="other">Outros</option>
            </select> 
          </div>
          <div>
            <label htmlFor="cidade">Localidade</label> <br />
            <input type="text" name='cidade' id='adCity' className='form-control' />
          </div>
          <div>
            <legend>Tipo de Trabalho</legend>
            <fieldset id='workPlace' className='form-control'>
                        <label>
                        <input type="checkbox" name="category" value="Presencial" checked={workPlaceSelected === 'Presencial'} onChange={handleWorkPlaceChange}/> Presencial
                        </label>
                        <label>
                        <input type="checkbox" name="category" value="Remoto" checked={workPlaceSelected === 'Remoto'} onChange={handleWorkPlaceChange}/> Remoto
                        </label>
                        <label>
                        <input type="checkbox" name="category" value="Híbrido" checked={workPlaceSelected === 'Híbrido'} onChange={handleWorkPlaceChange}/> Híbrido
                        </label>
            </fieldset>
          </div>
            <div>
                <legend>Tipos de Vaga</legend>
                <fieldset id='jobsType' className='form-control'>
                    
                        <label>
                        <input type="checkbox" name="type" value="Full-Time" checked={jobTypeSelected === 'Full-Time'} onChange={handleJobTypeChange}/> Full-Time
                        </label>
                        <label>
                        <input type="checkbox" name="type" value="Part-Time" checked={jobTypeSelected === 'Part-Time'} onChange={handleJobTypeChange}/> Part-Time
                        </label>
                        <label>
                        <input type="checkbox" name="type" value="Estágio" checked={jobTypeSelected === 'Estágio'} onChange={handleJobTypeChange}/> Estágio
                        </label>
                </fieldset>
            </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <textarea id='description' name="description" cols="45" rows="15" className='form-control' placeholder='Escreve aqui informações relevantes para o candidato, como a dinâmica da empresa, carga horária, preferências, responsabilidades, qualificações, etc.'></textarea>
          </div>
            <input type="submit" value="Publicar" className='btn btn-dark form-control' onClick={createAd}/>
        </form>
    </div>
  )
}

export default CreateAd