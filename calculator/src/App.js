import React from 'react'
import './index.css'

const App = () => {

  const [input, setInput] = React.useState(0)


  return (
    <div className="text-white bg-black h-screen flex flex-col place-items-center justify-center">

      <div id="calculator" className="border-2 border-orange-300 rounded-xl m-5 p-6 flex flex-col place-items-center">
      <div id="display" className="bg-slate-200 w-full py-4 text-black text-center rounded-xl text-7xl">{input}</div>
      <div id="first-row">
        <button id="clear" className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 hover:text-white font-bold">C</button>
        <button id="sign-change" className="bg-slate-300 border-4 border-orange-300 text-black px-6 py-6 rounded-full m-3 hover:bg-gray-800 hover:text-white font-bold">+/-</button>
        <button id="percent" className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 hover:text-white font-bold">%</button>
        <button id="divide" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 hover:text-white font-bold">/</button>
      </div>
      <div id="second-row">
        <button id="seven" onClick={()=>{setInput(7)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">7</button>
        <button id="eight" onClick={()=>{setInput(8)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">8</button>
        <button id="nine" onClick={()=>{setInput(9)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">9</button>
        <button id="multiply" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">x</button>
      </div>
      <div id="third-row">
        <button id="four" onClick={()=>{setInput(4)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">4</button>
        <button id="five" onClick={()=>{setInput(5)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">5</button>
        <button id="six" onClick={()=>{setInput(6)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">6</button>
        <button id="subtract" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">-</button>
      </div>
      <div id="fourth-row">
        <button id="one" onClick={()=>{setInput(1)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">1</button>
        <button id="two" onClick={()=>{setInput(2)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">2</button>
        <button id="three" onClick={()=>{setInput(3)}} className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">3</button>
        <button id="add" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">+</button>
      </div>
      <div id="fifth-row flex flex-col">
        <button id="zero" onClick={()=>{setInput(0)}} className="bg-black border-4 border-orange-300 text-white px-20 py-6 rounded-full mx-5 my-3 hover:bg-gray-800 font-bold">0</button>
        <button id="decimal" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">.</button>
        <button id="equals" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">=</button>
      </div>
      </div>
    </div>
  )
}

export default App