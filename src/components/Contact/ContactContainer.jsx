import React from 'react'
import ContactForm from './ContactForm'

export default function ContactContainer({ title, description }) {
  return (
    <div
      id='contacto'
      className='
        flex 
        flex-col
        gap-(--spacing-lg)
        md:gap-(--spacing-xxl)
        pt-(--spacing-xxl) 
        pb-(--spacing-xxxl) 
        px-(--section-padding-inline-sm) 
        md:px-(--section-padding-inline-md) 
        xl:px-(--section-padding-inline-xl)
        relative
      '>
      <h3 className='heading-3 md:text-center text-(--primary)'>Ingresá tus datos y te contactamos</h3>
      <div className='flex flex-col md:flex-row gap-(--spacing-xxl) '>
        <div className='flex flex-col gap-(--spacing-xs) md:w-1/2'>
          <div className='flex flex-col gap-(--spacing-xxs)'>
            <h3 className='heading-4 text-(--primary)'>{title}</h3>
            <p className='paragraph text-(--neutral) whitespace-pre-line'>{description}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
