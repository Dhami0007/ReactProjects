import React from 'react'
import Navigation from './navigation'
import { useState } from 'react'
import products from './products'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const ShoppingCart = () => {

    const items = products
    const [cart, setCart] = useState([])
    

  return (
    <div id="container" className="flex flex-col h-screen place-items-center">
        <nav className="w-screen">
            <Navigation />
        </nav>
        
        <div id="header" className="flex flex-row justify-around p-4 bg-orange-300 font-bold text-3xl w-screen">
            <h1>Our Mart!</h1>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
        </div>
        
        <div id="items" className="flex flex-row flex-wrap p-10 justify-around w-8/12">
            {items.map((item) => (
                <div key={item.id} className="p-2 m-1 flex flex-col place-items-center">
                <h2>{item.name}</h2>
                <img src={item.image} alt={item.name} className="h-40 w-40"/>
                <p>${item.price}</p>
                <div className="flex flex-row">
                    <button>-</button>
                    {item.quantity}
                    <button>+</button>

                </div>
                
                </div>))}
        </div>
        
    </div>
  )
}

export default ShoppingCart