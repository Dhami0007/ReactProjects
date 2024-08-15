import React, { useMemo } from 'react'
import { useState } from 'react';
import './index.css';

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

    const analysis = useMemo(() => {
        if(result<18.5){
            return "Underweight"
        }else if(result>=18.5 && result<24.9){
            return "Normal weight"
        }else if(result>=24.9 && result<29.9){
            return "Pre-obese"
        }else if(result>=29.9 && result<34.9){
            return "Class 1 Obese"
        }
        else if(result>=34.9 && result<39.9){
            return "Class 2 Obese"
        }
        else if(result>=40){
            return "Class 3 Obese"
        }
    },[result]);

    return (
    <div className="bg-slate-200 h-screen flex flex-col place-items-center justify-center">
        <div id="input-section" className="w-1/4 flex flex-col border rounded-lg p-5 border-black">
            <h1 className="bg-[#1d4ed8] text-white text-center py-5 my-5 rounded-md">BMI Calculator</h1>

            <p id="slider-output" className="py-2 my-2">Weight: {weight}kg</p>
            <input type="range" className="input-slider" step="1" min="20" max="200" value={weight} onChange={onWeightChange}/>

            <p id="slider-output" className="py-2 my-2">Height: {height}cm</p>
            <input type="range" className="input-slider" step="1" min="50" max="250" value={height} onChange={onHeightChange}/>
        
            <div id="output-section" className="py-3 my-3 flex flex-col place-items-center">
            <p>Your BMI is:</p>
            <div className="bg-green-500 p-2 my-2 rounded-md text-white"><p className="output">{result.toFixed(2)}</p></div>
            <p id="anlysis" className="my-3 p-3 rounded-md bg-slate-300 ">You are {analysis}</p>
        </div>
        </div>
    </div>
  )
}

export default Bmi_calc