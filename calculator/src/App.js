import React from 'react'
import './index.css'

const App = () => {
  return (
    <div className="text-white bg-black h-screen flex flex-col place-items-center justify-center">

      <div id="calculator" className="border-2 border-orange-300 rounded-xl m-5 p-6 flex flex-col place-items-center">
      <div id="display" className="bg-slate-200 w-full py-4 text-black text-center rounded-xl text-7xl">5</div>
      <div id="first-row">
        <button id="clear" className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">C</button>
        <button id="sign-change" className="bg-slate-300 border-4 border-orange-300 text-black px-6 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">+/-</button>
        <button id="percent" className="bg-slate-300 border-4 border-orange-300 text-black px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">%</button>
        <button id="divide" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">/</button>
      </div>
      <div id="second-row">
        <button id="seven" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">7</button>
        <button id="eight" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">8</button>
        <button id="nine" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">9</button>
        <button id="multiply" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">x</button>
      </div>
      <div id="third-row">
        <button id="four" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">4</button>
        <button id="five" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">5</button>
        <button id="six" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">6</button>
        <button id="subtract" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">-</button>
      </div>
      <div id="fourth-row">
        <button id="one" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">1</button>
        <button id="two" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">2</button>
        <button id="three" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">3</button>
        <button id="add" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">+</button>
      </div>
      <div id="fifth-row flex flex-col">
        <button id="zero" className="bg-black border-4 border-orange-300 text-white px-20 py-6 rounded-full mx-5 my-3 hover:bg-gray-800 font-bold">0</button>
        <button id="decimal" className="bg-black border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">.</button>
        <button id="equals" className="bg-orange-600 border-4 border-orange-300 text-white px-8 py-6 rounded-full m-3 hover:bg-gray-800 font-bold">=</button>
      </div>
      </div>
    </div>
  )
}

export default App