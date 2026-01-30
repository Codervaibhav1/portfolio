import React from 'react'
import Pic from '../assets/proflie.png'
const ProflieImage = () => {
  return (
    <div className='row mx-5'>
     <div className='col-12 mt-5 d-flex align-item-center justify-content-center animate__animated animate__fadeInUp'>
   <img className='w-100 rounded-4' src={Pic} alt="" />
     </div>
    </div>
  )
}

export default ProflieImage