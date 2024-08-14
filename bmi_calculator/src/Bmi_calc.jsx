import React, { useMemo } from 'react'
import { useState } from 'react';

const Bmi_calc = () => {
  
    const [weight,setWeight] = useState(70);
    const [height,setHeight] = useState(180);

    function onWeightChange(event){
        setWeight(event.target.value);
    }

    function onHeightChange(event){
        setHeight(event.target.value);
    }

    const result = useMemo(() => {
        const hm=height/100
        return weight/(hm*hm)
    }, [weight, height]);

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