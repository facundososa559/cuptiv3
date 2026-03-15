import React from 'react'
import client1 from "../../assets/logos-empresas/client-1.svg"
import client2 from "../../assets/logos-empresas/client-2.svg"
import client3 from "../../assets/logos-empresas/client-3.svg"
import client4 from "../../assets/logos-empresas/client-4.svg"
import client5 from "../../assets/logos-empresas/client-5.png"

function Logos() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-(--spacing-lg) w-full overflow-hidden'>
      <img className='max-h-[36px]' src={client1} alt="logo.svg" />
      <img className='max-h-[40px]' src={client5} alt="logo.svg" />
      <img className='max-h-[40px]' src={client2} alt="logo.svg" />
      <img className='max-h-[40px]' src={client3} alt="logo.svg" />
      <img className='max-h-[40px]' src={client4} alt="logo.svg" />
    </div>
  )
}

export default Logos
