import React from 'react'

function CardProjectDetail({image, title, description}) {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-(--spacing-xl)'>
      <img className='flex-none h-[280px] w-screen md:w-[38%] object-cover bg-cover rounded-sm' src={image} alt="project-image" />
      <div className='flex flex-col gap-(--spacing-sm)'>
        <h3 className='heading-4 text-(--primary)'>{title}</h3>
        <p className='paragraph text-(--neutral) whitespace-pre-line'>{description}</p>
      </div>
    </div>
  )
}

export default CardProjectDetail
