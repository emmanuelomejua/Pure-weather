import React, {useState} from 'react';

const api = {
  key: "f6c790308e9b3208e0ce154e7a0dcfe6",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App()  {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&
      units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result  => {
        setQuery('');
        setWeather(result);

        console.log(result)
      })
    }
  }

  const dateBuilder = (d) => {
    let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'DEcember']

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`
  }


    return (
      <div className={(typeof weather.main !== 'undefined') ? ((weather.main.temp > 280) ? 'app warm': 'app'): 'app'}>
        <main>
          <div className="search-box">
            <input 
            type="text" 
            placeholder="Search city..." 
            className="search-bar" 
            onChange={e =>  setQuery(e.target.value)} 
            value={query} 
            onKeyDown={search}
            />

          </div>
             {(typeof weather.main !== 'undefined') ? (
            <div>
              <div className='location-box'>
                 <div className='location'>{weather.name}, {weather.sys.country}</div>
                 <div className='date'>{dateBuilder(new Date())}</div>
                 <div className='weather-box'>
                   <div className='temp'>
                      {Math.round(weather.main.temp)}°F
                    </div>
                   <div className='weather'>
                     {weather.weather[0].main}
                    </div>
                </div>
              </div>
            </div> ): ('')}

        </main>
      </div>
    );
  
}

export default App;


// 27°c