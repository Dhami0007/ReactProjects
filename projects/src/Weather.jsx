import React from 'react'
import Navigation from './navigation' 
import './index.css'
import { useState } from 'react'

const Weather = () => {

    const api = {
        key: "16d49329caa5ce00157e0dbfe4b73c35",
        base: "https://api.openweathermap.org/data/2.5/"
    }
    const [place, setPlace] = useState('')
    const [weather, setWeather] = useState({})

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
            })

        setPlace('')
        }
    }
  return (
    <div>
        <Navigation />
        <div id="container" className="p-16">
            <div id="search">
                <input type="text" id="search" placeholder="Enter city name" className="p-2 rounded-md border border-slate-400 text-black hover:shadow-md selection:border-slate-500"
                value={place} onChange={handleChange}
                onKeyDown={handleKeyPress}/>
            </div>
            <div id="weather-box" className="p-4">
                {weather.main ? 
                <>
                <h3>{weather.name},{weather.sys.country}</h3>
                
                <h6>Longitude:{weather.coord.lon} Latitude: {weather.coord.lat}</h6>
                
                <h2>{weather.main.temp}</h2>
                
                <h3>{weather.weather[0].main}</h3>
                
                <h3>Wind: {weather.wind.speed} at {weather.wind.deg} Degrees with gust of {weather.wind.gust}</h3></> : 
                
                <h2>Nothing to show yet</h2>}
                
            </div>
        </div>
    </div>
  )
}

export default Weather