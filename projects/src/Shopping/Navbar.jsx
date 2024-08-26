import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({size,setShowCart}) => {
  return (
    <div className="flex flex-row justify-around p-4 bg-orange-300 font-bold text-3xl w-screen">
        <button onClick={()=>setShowCart(false)}><h1>Our Mart!</h1></button>
        <button onClick={()=>setShowCart(true)}>
        <span className='relative'><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></span><span className="absolute top text-sm bg-red-400 px-1 ml-0.5 rounded-full">{size}</span>
        </button>
    </div>
  )
}

export default Navbar