import React from 'react'
import { useState } from 'react'


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

    let adType = ''
    

    if (adTypes[0].checked) {
      adType = 'particular'
    } else {
      adType = 'profissional'
    }


    let adTitle = String(title.value) 
    let adPrice = Number(price.value)
    let adCategory = String(category.value)
    let adLocation = String(location.value)
    let adDescription = String(descricao.value)

    localStorage.setItem('tituloAnuncio', adTitle)
    localStorage.setItem('precoProduto', adPrice)
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
        <h1 className='criarAnuncioTitulo'>
            Criar Vaga
        </h1>
        
        <form id='criarAnuncio' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="adTitle">Título do anúncio</label> <br />
            <input type="text" className='form-control' name="adTitle" id="adTitle" />
          </div>
          <div>
            <label htmlFor="adPrice">Nome da Empresa</label> <br />
            <input type="text" className='form-control' name="adPrice" id="adPrice" />
          </div>
          <div>
            <label htmlFor="escolherCategoria">Escolher Categoria</label> <br />
            <select name="escolherCategoria" id="escolherCategoria" className='form-control' onChange={handleCategoriaChange}>
              <option value="" disabled>-- Escolha uma categoria --</option>
              <option value="vagas">Agricultura</option>
              <option value="imoveis">Acessoria</option>
              <option value="">IT</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="vestuario">Vestuário</option>
              <option value="brinquedos">Brinquedos</option>
              <option value="livros">Livros</option>
            </select> 
          </div>
          <div>
          <fieldset id='jobsType'>
                    <legend>Tipos de Vaga</legend>
                        <label>
                        <input type="checkbox" name="categoria" value="all"/> Tudo
                        </label>
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
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name='cidade' id='adCity' className='form-control' />
          </div>
          <div>
            <label htmlFor="descricao">Descrição</label>
            <textarea name="descricao" id="descricao" cols="45" rows="5" className='form-control' placeholder='Escreve o que gostarias de ler se fosse tu a ver este anúncio...'></textarea>
          </div>
          <div>
            <label htmlFor="particular">Particular</label>
            <input type="checkbox"  name='adType' value="particular" checked={selectedCheckBox === "particular"} onChange={()=> handleCheckBoxChange("particular")} id="particular"/>
            <label htmlFor="particular">Profissional</label>
            <input type="checkbox" name='adType' 
            value="profissional" checked={selectedCheckBox === "profissional"} onChange={()=> handleCheckBoxChange("profissional")}  id="professional"/>
          </div>
    
          <div>
            <input type="submit" value="Publicar" className='btn btn-dark form-control' onClick={criarAnuncio}/>
          </div>
        </form>
        
    </div>
  )
}

export default CreateAd