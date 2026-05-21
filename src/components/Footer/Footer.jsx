import React from 'react'
import CardData from '../Cards/CardData/CardData'
import logo from "../../assets/logo/cupti-logo.svg"

//Icons
import pin from "../../assets/icons/map-pin.svg"
import at from "../../assets/icons/at.svg"
import device from "../../assets/icons/device.svg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div 
      className='
        flex 
        flex-col
        gap-(--spacing-xl)
        py-(--spacing-xxxl)  
        md:flex-row 
        justify-between 
        px-(--section-padding-inline-sm)  
        md:px-(--section-padding-inline-md) 
        xl:px-(--section-padding-inline-xl)
        text-(--light)
        bg-(--primary)
      '>
      <div className='flex flex-col items-start gap-(--spacing-xs) md:w-64'>
        <img className="h-[48px]" src={logo} alt="logo.svg" />
        <p className='paragraph'>En CUPTI hacemos proyectos a la medida de tus necesidades.</p>
      </div>
      <div className='flex flex-col gap-(--spacing-sm)'>
        <h3 className='heading-5'>Navegación</h3>
        <ul className='flex flex-col gap-(--spacing-xxs)'>
          <li><a href="/" className='text-(--light) hover:text-(--accent) transition ease duration-200'>Inicio</a></li>
          <li><a href="/eficiencia-energetica" className='text-(--light) hover:text-(--accent) transition ease duration-200'>Eficiencia energética</a></li>
          <li><a href="/energias-renovables" className='text-(--light) hover:text-(--accent) transition ease duration-200'>Energías renovables</a></li>
          <li><a href="/ingenieria-industrial" className='text-(--light) hover:text-(--accent) transition ease duration-200'>Ingeniería industrial</a></li>
          <li><a href="/calculadora" className='text-(--light) hover:text-(--accent) transition ease duration-200'>Calculadora</a></li>
        </ul>
      </div>
      <div className='flex flex-col gap-(--spacing-sm)'>
        <h3 className='heading-5'>Contacto</h3>
        <div className='flex flex-col gap-(--spacing-xxs)'>
          <CardData icon={pin} title="Dirección" description="Haití 1500 - PTIc. Montevideo, Uruguay"/>
          <CardData icon={at} title="Email" description="info@cupti.com.uy"/>
          <CardData icon={device} title="Teléfono" description="091 529 737"/>
        </div>
      </div>
    </div>
  )
}

export default Footer
