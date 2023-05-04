
const cities = [
    {
      id: 0,
      title:'Uyo'
    },
    {
      id: 1,
      title:'Jerusalem'
    },
    {
      id: 2,
      title:'Paris'
    },
    {
      id: 3,
      title:'Belging'
    },
    {
      id: 4,
      title:'Tel Aviv'
    },
  ]


const TopBtn = () => {
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map(city=> (
        <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
      ))}
    </div>
  )
}

export default TopBtn
