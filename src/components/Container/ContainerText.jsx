import React from 'react'

function ContainerText({title, description}) {
  return (
    <div className='flex flex-col md:flex-row gap-(--spacing-xxl)'>
      <h3 className='heading-3 md:w-1/2 text-(--primary)'>{title}</h3>
      <p className='paragraph md:w-1/2 text-(--neutral) whitespace-pre-line'>{description}</p>
    </div>
  )
}

export default ContainerText
