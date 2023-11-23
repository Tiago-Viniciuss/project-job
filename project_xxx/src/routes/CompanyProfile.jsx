import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CompanyProfile = () => {
  return (
    <div>
      <Header/>
      <h1>
        Área da Empresa
      </h1>
      <div>
          <Link to={"/create-ad"}>Criar Vaga de Emprego</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default CompanyProfile