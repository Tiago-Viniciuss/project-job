import React from 'react'
import { useState } from 'react'
import '../style/CompanyProfile.css'
import { useNavigate } from 'react-router-dom';

const CreateCompanyProfile = () => {


  const navigate = useNavigate();

  function navigateToCompanyProfileLogin() {
      navigate('/company-profile-login')
  }



    function saveData(e) {

      e.preventDefault() 

      let title = document.getElementById('companyTitle')
      let email = document.getElementById('companyEmail')
      let category = document.getElementById('chooseCompanyCategory')
      let description = document.getElementById('companyDescription')
      let password = document.getElementById('companyPassword')

      let storageTitle = String(title.value)
      let storageEmail = String(email.value)
      let companyCategory = String(category.value)
      let companyDescription = String(description.value)
      let storagePassword = String(password.value)

      if (storageTitle.length != 0 && storageEmail.length != 0 && storagePassword.length != 0) {
        alert(`Parabéns, a conta para ${storageTitle} foi criada!`)
        localStorage.setItem ('companyTitle', storageTitle)
        localStorage.setItem ('companyEmail', storageEmail)
        localStorage.setItem('companyCategory', companyCategory)
        localStorage.setItem('companyDescription', companyDescription)
        localStorage.setItem ('companyPassword', storagePassword)
        navigateToCompanyProfileLogin()
      } else {
        alert (`Preencha os dados corretamente!`)
      }

      
    }


  return (
    <div id='createCompanyAccountContainer'>
        <h3 className='createCompanyAccountTitle'>Cadastre vossa empresa!</h3>
        <form id='createCompanyAccount' onSubmit={saveData}>
            <input className='form-control' type="text" name="companyName" id="companyTitle" placeholder='Digite o nome da empresa' required  autoComplete='companyName'/>

            <input className='form-control' type="email" name="companyEmail" id="companyEmail" placeholder='Digite o email da empresa' autoComplete='companyEmail' required/>

          <div id='categoryContainer'>
            <select name="chooseCategory" id="chooseCompanyCategory" className='form-control'>
              <option value="" disabled>-- Escolha uma categoria --</option>
              <option value="Administrativo e Secretariado">Administrativo e Secretariado</option>
              <option value="Agricultura e Jardinagem">Agricultura e Jardinagem</option>
              <option value="Assistente de Loja e Caixa">Assistente de Loja e Caixa</option>
              <option value="Call Center, Helpdesk e Telemarketing">Call Center, Helpdesk e Telemarketing</option>
              <option value="Cargos Executivos">Cargos Executivos</option>
              <option value="Comercial">Comercial</option>
              <option value="Construção Civil">Construção Civil</option>
              <option value="Contabilidade, Fiscalidade e Finanças">Contabilidade, Fiscalidade e Finanças</option>
              <option value="Desportos e Fitness">Desportos e Fitness</option>
              <option value="Domésticos e Limpeza">Domésticos e Limpeza</option>
              <option value="Formação, Ensino e Educação">Formação, Ensino e Educação</option>
              <option value="Industrial, Fabrico e Confecção Têxtil">Industrial, Fabrico e Confecção Têxtil</option>
              <option value="IT e Telecomunicações">IT e Telecomunicações</option>
              <option value="Marketing, Publicidade e Eventos">Marketing, Publicidade e Eventos</option>
              <option value="Restauração, Hotelaria e Turism">Restauração, Hotelaria e Turismo</option>
              <option value="Segurança e Vigilância">Segurança e Vigilância</option>
              <option value="Serviço Social e Voluntariado">Serviço Social e Voluntariado</option>
              <option value="Saúde e Beleza">Saúde e Beleza</option>
              <option value="Outros">Outros</option>
            </select> 
          </div>
            <textarea id='companyDescription' name="description" cols="45" rows="15" className='form-control' placeholder='Escreve aqui informações relevantes sobre a sua empresa, como uma breve descrição...'></textarea>
          <input className='form-control' type="password" name="companyPassword" id="companyPassword" placeholder='Crie uma senha com letras e números' autoComplete='current-password' required pattern="^(?=.*[a-z])(?=.*[0-9]).{8,}$"
             title="A senha deve conter letras minúsculas, números e no mínimo 8 caracteres" />

            <input className='btn btn-dark' type="submit" value="Criar Conta" />
            
        </form>
    </div>
  )
}

export default CreateCompanyProfile
