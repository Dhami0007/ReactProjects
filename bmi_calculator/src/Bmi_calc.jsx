import React from 'react'
import { useState } from 'react';

const Bmi_calc = () => {
  
    const [weight,setWeight] = useState(70);
    const [height,setHeight] = useState(180);
    const [result,setResult] = useState(weight/(height/100)**2);

    function onWeightChange(event){
        setWeight(event.target.value);
        setResult(weight/(height/100)**2);
    }

    function onHeightChange(event){
        setHeight(event.target.value);
        setResult(weight/(height/100)**2);
    }

    return (
    <div>
        <h1>BMI Calculator</h1>
        <div className="input-section">
            <p className="slider-output">Weight: {weight}kg</p>
            <input type="range" className="input-slider" step="1" min="20" max="200" value={weight} onChange={onWeightChange}/>
            <p className="slider-output">Height: {height}cm</p>
            <input type="range" className="input-slider" step="1" min="50" max="250" value={height} onChange={onHeightChange}/>
        </div>
        <div className="output-section">
            <p>Your BMI is:</p>
            <p className="output">{result.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default Bmi_calc