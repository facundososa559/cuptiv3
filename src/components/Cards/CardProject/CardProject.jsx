import React from 'react'

function CardProject({category, title, description, year, link}) {
  return (
    <div className='flex flex-col gap-(--spacing-xxs) text-(--neutral) p-(--spacing-sm) border rounded-sm border-(--neutral-light)'>
      <h3 className='tracking-wider paragraph'>{category}</h3>
      <h2 className='heading-5 text-(--primary)'>{title}</h2>
      <p className='paragraph'>{description}</p>
      <div className='flex flex-column justify-between pt-(--spacing-xs) mt-(--spacing-sm) border-t-1 border-black/20'>
        <a href={link} className='text-(--secondary) hover:text-(--accent) transition ease duration-200'>Ver proyecto →</a>
        <p className='paragraph'>{year}</p>
      </div>
    </div>
  )
}

export default CardProject
