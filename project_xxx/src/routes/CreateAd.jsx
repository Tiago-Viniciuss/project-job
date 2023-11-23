import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/CreateAd.css'


const CreateAd = () => {

    const [selectedCheckBox, setSelectedCheckbox] = useState(null);
  
    const handleCheckBoxChange = (value) => {
      setSelectedCheckbox(value);
    };


  const handleSubmit = (e) => {
    e.preventDefault() 
}

  function criarAnuncio() {
    let title = document.getElementById('adTitle')
    let price = document.getElementById('adPrice')
    let category = document.getElementById('escolherCategoria')
    let location = document.getElementById('adCity')
    let descricao = document.getElementById('descricao')
    let adTypes = document.getElementsByName('adType')

    //let adType = ''
    

    /*if (adTypes[0].checked) {
      adType = 'particular'
    } else {
      adType = 'profissional'
    }*/


    let adTitle = String(title.value) 
    let adCategory = String(category.value)
    let adLocation = String(location.value)
    let adDescription = String(descricao.value)

    localStorage.setItem('tituloAnuncio', adTitle)
    localStorage.setItem('categoriaAnuncio', adCategory)
    localStorage.setItem('cidadeAnuncio', adLocation)
    localStorage.setItem('descricaoAnuncio', adDescription)
    localStorage.setItem('tipoAnuncio', adType)
  }

  const [selectedCategoria, setSelectedCategoria] = useState('');

  const handleCategoriaChange = (event) => {
    const categoriaSelecionada = event.target.value;
    setSelectedCategoria(categoriaSelecionada);
  };

  const verifyCategory = () => {

    let showCategory = document.getElementById('showCategory')
    let carBar = document.getElementById('carBar')
    let motoBar = document.getElementById('motoBar')
    let truckBar = document.getElementById('truckBar')

    switch (selectedCategoria) {
      case 'carros':
          showCategory.appendChild(carBar);
          carBar.style.display = 'block';
          motoBar.style.display = 'none';
          truckBar.style.display = 'none';
          break;

      case 'motos':
          showCategory.appendChild(motoBar);
          motoBar.style.display = 'block';
          carBar.style.display = 'none';
          truckBar.style.display = 'none';
          break;

        case 'camioes':
          showCategory.appendChild(truckBar);
          truckBar.style.display = 'block';
          motoBar.style.display = 'none';
          carBar.style.display = 'none';
          break;

      default:
        break;
    }
  }

  return (
    <div>
      <Link to={'/company-profile'}>
      <span className='material-symbols-outlined'>arrow_back_ios</span>
      </Link>
        <h1 className='criarAnuncioTitulo'>
            Criar Vaga
        </h1>
        
        <form className='form-control' id='createAd' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="adTitle">Título do anúncio</label> <br />
            <input type="text" className='form-control' name="adTitle" id="adTitle" />
          </div>
          <div>
            <label htmlFor="adPrice">Nome da Empresa</label> <br />
            <input type="text" className='form-control' name="adPrice" id="adPrice" />
          </div>
          <div>
            <label htmlFor="escolherCategoria">Ramo de Atuação</label> <br />
            <select name="escolherCategoria" id="escolherCategoria" className='form-control' onChange={handleCategoriaChange}>
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
                        <input type="checkbox" name="categoria" value="full-time"/> Presencial
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="part-time"/> Remoto
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="internship"/> Híbrido
                        </label>
            </fieldset>
          </div>
            <div>
                <legend>Tipos de Vaga</legend>
                <fieldset id='jobsType' className='form-control'>
                    
                        <label>
                        <input type="checkbox" name="categoria" value="full-time"/> Full-Time
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="part-time"/> Part-Time
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="internship"/> Estágio
                        </label>
                </fieldset>
            </div>
          <div>
            <label htmlFor="descricao">Descrição</label>
            <textarea id='descricao' name="descricao" cols="45" rows="15" className='form-control' placeholder='Escreve aqui informações relevantes para o candidato, como a dinâmica da empresa, carga horária, preferências, responsabilidades, qualificações, etc.'></textarea>
          </div>
            <input type="submit" value="Publicar" className='btn btn-dark form-control' onClick={criarAnuncio}/>
        </form>
    </div>
  )
}

export default CreateAd