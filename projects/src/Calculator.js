import React from 'react'
import './index.css'
import Navigation from './navigation'

const Calculator = () => {

  const [input, setInput] = React.useState("")
  

  function handleEval(input){
    try{
      let operator = null
      const operators = ['+', '-', 'x', '/']
      for(let i=0; i<input.length; i++){
        if (operators.includes(input[i])){
          operator = input[i]
          break
        } 
      }
      
      if (operator === null){
        setInput(input)
        return
      }
      else{
      const [num1, num2] = input.split(operator).map(parseFloat)

      switch(operator){
        case '+':
          setInput(num1 + num2)
          break
        case '-':
          setInput(num1 - num2)
          break
        case 'x':
          setInput(num1 * num2)
          break
        case '/':
          setInput(num1 / num2)
          break
        default:
          setInput("Error")
      }}

    }
    catch(err){
      setInput("Error")
      console.log(err)
    }
  }

  function handleClick(value){

    if (value === "C"){
      setInput("")
    }
    else if (value==="<"){
      setInput(input.slice(0, -1))
    }
    else{
      setInput(input + value)
    }
    
  }

  return (
    <div>
      <Navigation/>
    <div className="text-white bg-slate-200 h-screen flex flex-col place-items-center">

      <div id="calculator" className="border border-black shadow-lg shadow-orange-300 rounded-xl mt-5 p-5 flex flex-col place-items-center">
      
      <div id="display" className="bg-black shadow-md shadow-slate-500 w-full h-20 text-white text-center rounded-xl text-7xl">{input}</div>
      
      <div id="first-row">
        <button id="clear" onClick={()=>{handleClick("C")}} className="bg-slate-300 border-4  border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 hover:text-white font-bold">C</button>

        <button id="sign-change" onClick={()=>{handleClick("<")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 hover:text-white font-bold">&lt;</button>
        
        <button id="percent" className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 hover:text-white font-bold">%</button>
        
        <button id="divide" onClick={()=>{handleClick("/")}}className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 hover:text-white font-bold">/</button>
      </div>
      
      <div id="second-row">
      
        <button id="seven" onClick={()=>{handleClick("7")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">7</button>
      
        <button id="eight" onClick={()=>{handleClick("8")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">8</button>
      
        <button id="nine" onClick={()=>{handleClick("9")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">9</button>
      
        <button id="multiply" onClick={()=>{handleClick("x")}} className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">x</button>
      </div>
      
      <div id="third-row">
      
        <button id="four" onClick={()=>{handleClick("4")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">4</button>
      
        <button id="five" onClick={()=>{handleClick("5")}}className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">5</button>
      
        <button id="six" onClick={()=>{handleClick("6")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">6</button>
      
        <button id="subtract" onClick={()=>{handleClick("-")}} className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">-</button>
      </div>
      
      <div id="fourth-row">
      
        <button id="one" onClick={()=>{handleClick("1")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">1</button>
      
        <button id="two" onClick={()=>{handleClick("2")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">2</button>
      
        <button id="three" onClick={()=>{handleClick("3")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">3</button>
      
        <button id="add" onClick={()=>{handleClick("+")}} className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">+</button>
      </div>
      
      <div id="fifth-row flex flex-col">
      
        <button id="zero" onClick={()=>{handleClick("0")}} className="bg-slate-300 border-4 border-orange-300 text-black px-20 py-6 rounded-full mx-5 my-3 hover:bg-gray-800 font-bold">0</button>
        
        <button id="decimal" onClick={()=>{handleClick(".")}} className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">.</button>
        
        <button id="equals" onClick={()=>{handleEval(input)}} className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">=</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Calculator
