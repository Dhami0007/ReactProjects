import React from 'react'
import Navigation from '../navigation'
import { useState } from 'react'
import products from './products'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const ShoppingCart = () => {

    const [items, setItems] = useState(products)
    const [cart, setCart] = useState([])

    function handleAdd(id) {
        const newItem = items.find((item) => item.id === id)
        newItem.quantity = 1
        newItem.added = true
        setItems([...items])
        setCart([...cart, newItem])
        console.log("cart ",cart)
    }
    
    function quantityChange(id, type) {
        const newItem = items.find((item) => item.id === id)
        if (type === "neg") {
            newItem.quantity--
            if (newItem.quantity === 0) {
                newItem.added = false
                setCart(cart.filter((item) => item.id !== id))
            }
        } else {
            newItem.quantity++
            setCart([...cart])
        }
        setItems([...items])
        console.log("cart ", cart)
    }

  return (
    <div id="container" className="flex flex-col h-screen place-items-center">
        <nav className="w-screen">
            <Navigation />
        </nav>
        
        <div id="header" className="flex flex-row justify-around p-4 bg-orange-300 font-bold text-3xl w-screen">
            <h1>Our Mart!</h1>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
        </div>
        
        <div id="items" className="flex flex-row flex-wrap p-10 justify-between w-11/12">
            {items.map((item) => (
                <div key={item.id} className="p-2 m-3  flex flex-col place-items-center bg-slate-100 border-2 border-slate-200 rounded-lg shadow-sm shadow-slate-400">
                <h2 className="bg-yellow-50 w-full text-center font-semibold m-2 rounded-md">{item.name}</h2>
                <img src={item.image} alt={item.name} className="h-40 w-40 rounded-lg"/>
                 
                <div className="flex flex-row justify-between w-full pt-3">
                    <p className="font-semibold">${item.price}</p>
                    { item.added === false ? <button className="bg-slate-200 shadow-sm shadow-slate-300 px-2 rounded-md" onClick={() => handleAdd(item.id)}>Add to cart</button> : 
                    <>
                    <button onClick={()=>quantityChange(item.id,"neg")}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={()=>quantityChange(item.id,"pos")}>+</button>
                    </>
                    }

                </div>
                
                </div>))}
        </div>
        
    </div>
  )
}

export default ShoppingCart