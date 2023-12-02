import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../style/Home.css'


const Header = () => {

    function openMenu() {
        const menuNav = document.getElementById('menuNavigation')
        const buttonOpenMenu = document.getElementById('openMenu')

        buttonOpenMenu.style.display = 'none'
        menuNav.classList.toggle('opened')
    }

    function closeMenu() {
        const menuNav = document.getElementById('menuNavigation')
        const buttonOpenMenu = document.getElementById('openMenu')

        buttonOpenMenu.style.display = 'block'
        menuNav.classList.toggle('opened')
    }

    function closeMenuNav() {
        const menuNav = document.getElementById('menuNavigation')
        const buttonOpenMenu = document.getElementById('openMenu')

        buttonOpenMenu.style.display = 'block'
        menuNav.classList.toggle('opened')
    }

  return (
    <div>
        <header id='header'>
            <button id='openMenu' className='material-symbols-outlined item' onClick={openMenu}>menu</button>
            <h1 id='brandTitle' className='item'>
                <Link to={'/'}>EMPREGOS</Link>
            </h1>
        </header>
        <nav id='menuNavigation'>
            <button id='closeMenu' className='material-symbols-outlined' onClick={closeMenu}>close</button>
            <select name="changeLanguage" id="changeLanguage" className='item'>
                <option value="portuguses">PT</option>
                <option value="english">EN</option>
                <option value="spanish">ES</option>
                <option value="french">FR</option>
            </select>
            <div id='navigationLinks'>
                <Link to={'/'}  onClick={closeMenuNav}>Home</Link>
                <Link to={'/company-profile-login'}>Área da Empresa</Link>
                <Link to={'/candidate-profile'}>Perfil do Candidato</Link>
                <Link>Guia de Carreira</Link>
                <Link>Anuncie Aqui</Link>
                <Link>Notícias</Link>
                
            </div>
            <div id='loginButtons'>
                <Link to={'/company-profile-login'}>
                    <span className="material-symbols-outlined">login
                    </span>Login Empresa
                </Link>
                <Link to={'/candidate-profile'}> 
                    <span className="material-symbols-outlined">login
                    </span>Login Candidato
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Header