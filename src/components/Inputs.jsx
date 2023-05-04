import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'

const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
     <div className="flex flex-row items-center w-3/4 justify-center space-x-4">
        <input 
        type="text" 
        placeholder='Search...' 
        className="text-xl font-500 p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" 
        />
        
        <UilSearch className='text-white cursor-pointer transition ease-in-out hover:scale-125'  size={25}/>
        <UilLocationPoint className='text-white cursor-pointer transition ease-in-out hover:scale-125'  size={25} />
     </div>

     <div className="flex flex-row items-center justify-center w-1/4">
        <button name='metric' className="text-xl text-white font-light">°C</button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name='imperial' className="text-xl text-white font-light">°F</button>
     </div>
    </div>
  )
}

export default Inputs
