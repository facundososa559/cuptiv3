import React from 'react'

function CardData({icon, title, description}) {
  return (
    <div className='flex items-start gap-(--spacing-xxxs)'>
      <img src={icon} alt="icon-svg" />
      <div>
        <h3 className='heading-6'>{title}</h3>
        <p className='paragraph'>{description}</p>
      </div>
    </div>
  )
}

export default CardData
