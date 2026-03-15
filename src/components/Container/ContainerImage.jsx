import React from 'react'

function ContainerImage({image, title, heading, description}) {
 
  
  return (
    <div className='flex items-center flex-col md:flex-row gap-(--spacing-xxl) text-(--neutral)'>
      <div className='flex flex-col'>
        <p className='paragraph pb-(--spacing-xxs)'>{title}</p>
        <h3 className='heading-4 text-(--primary) pb-(--spacing-sm)'>{heading}</h3>
        <p className='paragraph whitespace-pre-line'>{description}</p>
      </div>
      <img className='h-[400px] w-screen md:w-[40%] object-cover object-[80%] rounded-sm' src={image} alt="image.webp" />
    </div>
  )
}

export default ContainerImage
