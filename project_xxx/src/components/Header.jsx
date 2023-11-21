import React from 'react'
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

    function searchItem() {
        const header = document.getElementById('header')
        const searchItem = document.getElementById('searchBox')

        header.classList.toggle('expand')
        searchItem.classList.toggle('visible')
        
    }

  return (
    <div>
        <header id='header'>
            <button id='openMenu' className='material-symbols-outlined item' onClick={openMenu}>menu</button>
            <h1 id='brandTitle' className='item'>
                Project X
            </h1>
            <div id='searchBox'>
                <input type="search" name="searchItem" id="searchItem" placeholder='O que estás a procurar?'/>
            </div>
            <button className='material-symbols-outlined' id='searchButton' onClick={searchItem}>search</button>
        </header>
        <nav id='menuNavigation'>
            <button id='closeMenu' className='material-symbols-outlined' onClick={closeMenu}>close</button>
            <div id='navigationLinks'>
                <Link>Home</Link>
                <Link>Área exclusiva</Link>
                <Link>Categoria A</Link>
                <Link>Categoria B</Link>
                <Link>Categoria C</Link>
                <Link>Categoria D</Link>
                <Link>Categoria E</Link>
                <Link>Categoria F</Link>
            </div>
            <select name="changeLanguage" id="changeLanguage" className='item'>
                <option value="portuguses">PT</option>
                <option value="english">EN</option>
                <option value="spanish">ES</option>
                <option value="french">FR</option>
            </select>
        </nav>
    </div>
  )
}

export default Header