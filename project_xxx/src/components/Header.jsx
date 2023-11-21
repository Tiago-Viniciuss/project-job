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


    function searchItem() {
        const header = document.getElementById('header')
        const searchItem = document.getElementById('searchBox')
        const showFiltersButton = document.getElementById('showFilters')
        const filter = document.getElementById('filter')


        header.classList.toggle('expand')
        searchItem.classList.toggle('visible')
        if (searchItem.className == 'visible') {
            showFiltersButton.style.top = '70px'
            filter.style.top = '125px'
        } else {
            showFiltersButton.style.top = '40px'
            filter.style.top = '95px'
        }
        
        
    }
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();}

    function showFilters() {
        const filter = document.getElementById('filter')

        filter.classList.toggle('showFilters')
    }

    function searchJob() {
        const filter = document.getElementById('filter')

        filter.classList.toggle('showFilters')
    }

  return (
    <div>
        <header id='header'>
            <button id='openMenu' className='material-symbols-outlined item' onClick={openMenu}>menu</button>
            <h1 id='brandTitle' className='item'>
                Project X
            </h1>
            <div id='searchBox'>
                <input type="search" name="searchItem" id="searchItem" placeholder='Qual emprego estás a procurar?'/>
            </div>
            <button className='material-symbols-outlined' id='searchButton' onClick={searchItem}>search</button>
            <button id='showFilters' onClick={showFilters}>Filters <span className='material-symbols-outlined' id='filterSymbol'>tune</span></button>
            <div id='filter'>
                <form onSubmit={handleSubmit}>
                    <input type="search" name="" id="" placeholder='Em qual cidade?'/>   
                <div>
                    <select name="" id="">
                            <optgroup>
                                <option value="">Mais Recentes</option>
                                <option value="">Últimas 24h</option>
                                <option value="">Última Semana</option>
                                <option value="">Mais Antigos</option>   
                            </optgroup>
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
                    <fieldset id='contractType'>
                    <legend>Tipos de Contrato</legend>
                        <label>
                        <input type="checkbox" name="categoria" value="all"/> Tudo
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="undefined"/> A Definir
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="temporary"/> Temporário
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="without-term"/> Sem Termo
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="with-term"/> A Termo
                        </label>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                    <legend>Salário</legend>
                        <label>
                        <input type="checkbox" name="categoria" value="all"/> Tudo
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="until-500"/> Até 500€
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="500-1k"/> 500€ - 1000€
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="1k-1_5k"/> 1000€ - 1500€
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="1_5k-2k"/> 1500€ - 2000€
                        </label>
                        <label>
                        <input type="checkbox" name="categoria" value="plus-2k"/> mais de 2000€
                        </label>
                    </fieldset>
                </div>
                    <input type="submit" value="Buscar Vagas" id='searchJobButton' onClick={searchJob}/>
                </form>
            </div>
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