import React, { useState, useEffect, useRef } from 'react';


function Counter({number, description}) {
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <h4 className='heading-1 text-(--primary)'>+{number}</h4>
      <p className='paragraph text-(--neutral) text-center'>{description}</p>
    </div>
  )
}

export default Counter
