import React from 'react'
import logo from '../assets/logo1.png'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'

const TempDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p className="">Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-around py-3 text-white">
        <img src={logo} alt="" className="w-20 h-15"/>
        <p className="text-white text-5xl font-medium">28°C</p>
        
        <div className="flex flex-col space-y-2 ">
            <div className="flex items-center text-sm font-light">
                <UilTemperature size={18} className='mr-1'/>
                Real felt:
                <span className="ml-1 font-medium">28°C</span>
            </div>

            <div className="flex items-center text-sm font-light">
                <UilTear size={18} className='mr-1'/>
                Humidity:
                <span className="ml-1 font-medium">62%</span>
            </div>

            <div className="flex items-center text-sm font-light">
                <UilWind size={18} className='mr-1'/>
                Wind:
                <span className="ml-1 font-medium">3km/h</span>
            </div>
        </div>  
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun/>
        <p className="font-light">Rise: <span className="ml-1 font-medium">06:45AM</span></p>
        <p className="">|</p>

        <UilSunset/>
        <p className="font-light">Set: <span className="ml-1 font-medium">07:45PM</span></p>
        <p className="">|</p>

        <UilArrowUp/>
        <p className="font-light">High: <span className="ml-1 font-medium">31</span></p>
        <p className="">|</p>

        <UilArrowDown/>
        <p className="font-light">Low: <span className="ml-1 font-medium">27</span></p>
        
      </div>

    </div>
  )
}

export default TempDetails


