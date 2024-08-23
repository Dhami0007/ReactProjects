import React from 'react'
import Navigation from './navigation' 
import './index.css'
import { useState, useRef } from 'react'

const Weather = () => {

    const api = {
        key: "16d49329caa5ce00157e0dbfe4b73c35",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [place, setPlace] = useState('')
    const [weather, setWeather] = useState({})
    const container = useRef(null)

    function handleChange(e) {
        setPlace(e.target.value)
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            fetch(`${api.base}weather?q=${place}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setWeather(result)
                backgroundChange(result.main.temp)
            })

        setPlace('')
        }
    }

    function backgroundChange(temp){
        if(temp < 10){
            container.current.style.backgroundImage =`url(images/weather/cold.jpg)`
        } else if(temp >= 10 && temp < 20){
            container.current.style.backgroundImage =`url(images/weather/cloudy.jpg)`
        } else {
            container.current.style.backgroundImage =`url(images/weather/sunny.jpg)`
        }
        
    }

  return (
    <div>
        <div id="container" className="px-16 pb-16 flex flex-col place-items-center h-screen bg-cover bg-center bg-no-repeat" ref={container}>
            <nav className="justify-start w-screen mb-3">
                <Navigation />
            </nav>

            <div id="weather-stuff" className="flex flex-col place-items-center p-10 w-screen">
            
            <input type="text" id="search" placeholder="Enter city name" className="py-3 rounded-md border border-slate-400 text-black hover:shadow-md mb-10 w-1/3 text-xl text-center"
            value={place} onChange={handleChange}
            onKeyDown={handleKeyPress}/>
            
            <div id="weather-box" className="p-4 flex flex-col place-items-center">
                {weather.main ? 
                <>
                <h3 className="text-3xl font-bold p-1">{weather.name},{weather.sys.country}</h3>
                
                <h6 className="italic mb-5">Longitude:{weather.coord.lon} Latitude: {weather.coord.lat}</h6>
                
                <h2 className="p-8 bg-slate-100 font-bold text-5xl rounded-lg shadow-md shadow-stone-400 mb-5">{weather.main.temp}&deg;c</h2>
                
                <h3 className="text-2xl font-bold mb-1">{weather.weather[0].main}</h3>
                
                </> : 
                
                <h2>Nothing to show yet</h2>}
                
            </div>
            </div> 
            
        </div>
    </div>
  )
}

export default Weather