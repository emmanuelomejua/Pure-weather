import React from 'react'
import img from '../assets/logo1.png'

const Forcast = ({title}) => {
  return (
    <div className=''>
      <div className="flex items-center justify-start mt-6">
        <h4 className="text-white font-medium uppercase">{title}</h4>
      </div>
      <hr className='my-2'/>

      <div className="flex items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">05:30PM</p>
            <img src={img} alt="" className="w-10 mt-5" />
            <p className="font-medium mt-5">22°C</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">05:30PM</p>
            <img src={img} alt="" className="w-10 mt-5" />
            <p className="font-medium mt-5">22°C</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">05:30PM</p>
            <img src={img} alt="" className="w-10 mt-5" />
            <p className="font-medium mt-5">22°C</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">05:30PM</p>
            <img src={img} alt="" className="w-10 mt-5" />
            <p className="font-medium mt-5">22°C</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">05:30PM</p>
            <img src={img} alt="" className="w-10 mt-5" />
            <p className="font-medium mt-5">22°C</p>
        </div>
      </div>
    </div>
  )
}

export default Forcast
