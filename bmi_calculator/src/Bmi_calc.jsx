import React from 'react'
import { useState } from 'react';

const Bmi_calc = () => {
  
    const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState(0);
    const [result,setResult] = useState(0);

    function handleCalc(){
        let hm = height/100;
        setResult(weight/(hm*hm));
    }

    return (
    <div>
        <h1>BMI Calculator</h1>
        <form>
            <div>
            <label>Weight(kg): {weight}</label><br/>
            <input type="range" id="weight" name="weight" min={0} max={120} step={1} value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
            </div>
            <div>
            <label>Height(cm): {height}</label><br/>
            <input type="range" id="height" name="height" min={0} max={220} step={1} value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
            </div>
            <div>
            <button onClick={handleCalc}>Calculate</button>
            </div>
        </form>
        <div id="result">{result}</div>
    </div>
  )
}

export default Bmi_calc