import React from 'react'
import Navigation from './navigation' 
import './index.css'
import './images/cold.jpg'
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
        console.log("Checking temp", temp)
        if (temp < 16){
            container.current.style.backgroundImage = "url('./images/cold.jpg')";
        }
        else if (temp >= 16 && temp < 25){
            container.current.style.backgroundImage = "url('./images/cloudy.jpg')";
        }
        else{
            container.current.style.backgroundImage = "url('./images/sunny.jpg')";
        }
    }

  return (
    <div>
        <Navigation />
        <div id="container" className="p-16 flex flex-col place-items-center h-screen" ref={container}>
            <div id="search">
                <input type="text" id="search" placeholder="Enter city name" className="px-2 py-1 rounded-md border border-slate-400 text-black hover:shadow-md mb-10"
                value={place} onChange={handleChange}
                onKeyDown={handleKeyPress}/>
            </div>
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
  )
}

export default Weather