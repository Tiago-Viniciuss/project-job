import React from 'react'
import CreateAd from '../routes/CreateAd'

const CompanyProfile = () => {




  return (
    <div>
        <div className='backgroundProfile' id='companyBrandPicture'>
            
        </div>
        <h1>Jaguar Company</h1>
        <h3>Categoria</h3>
        <p>
            <strong>Descrição</strong> <br/>
                A Jaguar é uma marca britânica de automóveis de luxo e alto desempenho, com origens na produção de sidecars para motocicletas na década de 1920. Reconhecida por seu design elegante e inovação tecnológica, a Jaguar oferece uma gama de veículos, incluindo sedãs, SUVs e carros esportivos. Parte da Jaguar Land Rover, subsidiária da Tata Motors desde 2008, a marca tem uma história notável em competições automobilísticas e é conhecida por combinar conforto com desempenho em seus modelos.
        </p>
        <CreateAd/>
    </div>
  )
}

export default CompanyProfile