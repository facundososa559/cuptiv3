import React from 'react'
import "./Hero.css"

function Hero({page, title, subtitle, cta, ctaLink}) {

  return (
    /* Contenedor principal */
    <section className={`min-h-dvh flex items-center ${page}-bg`} >
        {/* Este contenedor funciona como overlay */}
        <div 
          className='
            overlay
            min-h-dvh
            w-full
            flex
            flex-col
            bg-sky-800/30
            justify-center
            py-(--spacing-xxxl)
            px-(--section-padding-inline-sm) 
            md:px-(--section-padding-inline-md) 
            lg:px-(--section-padding-inline-lg)
          '>
            {/* Contenedor del contenido del Hero */}
            <div className='flex flex-col justify-start md:w-3/4 lg:w-[57%] gap-(--spacing-sm)'>
                <h1 className='heading-3 text-(--light)'>{title}</h1>
                <p className='paragraph text-(--light)'>{subtitle}</p>
                <button className='md:w-3/4 lg:w-3/5 bg-(--accent)'>
                    <a href={ctaLink} className='text-(--light)'>
                        {cta} <span>→</span>
                    </a>
                </button>
            </div>
          </div>
    </section>
  )
}

export default Hero
