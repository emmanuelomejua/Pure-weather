import React from 'react'

const Tal = () => {
  return (
    <div>
      <div className="flex flex-row justify-center my-6">
        <p className="text-xl text-white font-extralight">
            {new Date().toDateString()} | Local time: 06 : 46PM
        </p>
      </div>
      <div className="flex flex-row justify-center my-3">
        <p className="text-white text-3xl font-medium">Uyo, Nigeria</p>
      </div>
    </div>
  )
}

export default Tal
