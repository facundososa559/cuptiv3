import React from 'react'
import logoBlue from "../../assets/logo/cupti-logo-blue.svg"
import logoWhite from "../../assets/logo/cupti-logo.svg"
import menuLight from "../../assets/icons/menu-light.svg"
import menuDark from "../../assets/icons/menu-dark.svg"
import { useState, useEffect } from "react"

function NavBar() {
  const [width, setWidth] = useState(window.innerWidth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <header className={`flex absolute w-full ${isMenuOpen && width < 900 ? "bg-(--light)" : "]"}`}>
      <div className="flex flex-wrap w-full flex-row justify-between items-center gap-(--spacing-sm) px-(--section-padding-inline-sm) md:px-(--section-padding-inline-md) xl:px-(--section-padding-inline-xl) py-(--spacing-sm)">
        <a href="/" className="navbar-logo">
          <img src={isMenuOpen ? logoBlue : logoWhite} alt="CUPTI" />
        </a>

        <div className={`${width > 900 ? "hidden" : ""}`} onClick={toggleMenu}>
          <img className='w-[40px] h-[40px]' src={isMenuOpen ? menuDark : menuLight} alt="menu-light.svg" />
        </div>

        <nav className={`basis-full grow md:basis-auto md:grow-0  ${isMenuOpen || width > 900 ? "flex" : "hidden"}`}>
          <ul className={`flex flex-col md:flex-row md:bg-none gap-(--spacing-sm) ${width > 900 ? "text-(--light)" : ""}`}>
            <li><a className='hover:text-(--accent) transition ease duration-200' href="/">Inicio</a></li>
            <li><a className='hover:text-(--accent) transition ease duration-200' href="/eficiencia-energetica">Eficiencia energética</a></li>
            <li><a className='hover:text-(--accent) transition ease duration-200' href="/energias-renovables">Energías renovables</a></li>
            <li><a className='hover:text-(--accent) transition ease duration-200' href="/ingenieria-industrial">Ingeniería industrial</a></li>
            <li><a className='hover:text-(--accent) transition ease duration-200' href="/calculadora">Calculadora</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default NavBar
