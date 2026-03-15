import React from 'react'

function CardMethodology({icon, title, description}) {
  return (
    <div className='flex flex-col items-center gap-(--spacing-xxs)'>
      <img className="w-[48px] h-[48px]" src={icon} alt="icon.svg" />
      <h3 className='text-center heading-5 text-(--primary)'>{title}</h3>
      <p className='text-center paragraph text-(--neutral)'>{description}</p>
    </div>
  )
}

export default CardMethodology
