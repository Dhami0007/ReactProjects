import React from 'react'
import Navigation from '../navigation'
import { useState } from 'react'
import products from './products'
import '../index.css'
import Navbar from './Navbar'
import Shop from './Shop'
import Cart from './Cart'


const ShoppingCart = () => {

    const [cart, setCart] = useState([])
    const [size, setSize] = useState(0)
    const [items, setItems] = useState(products)
    const [showCart, setShowCart] = useState(false)

    function handleAdd(id) {
        const newItem = items.find((item) => item.id === id)
        newItem.quantity = 1
        newItem.added = true
        setItems([...items])
        setCart([...cart, newItem])
        setSize(size + 1)
    }

    function quantityChange(id, type) {
        const newItem = items.find((item) => item.id === id)
        if (type === "neg") {
            newItem.quantity--
            setSize(size - 1)
            if (newItem.quantity === 0) {
                newItem.added = false
                setCart(cart.filter((item) => item.id !== id))
            }
        } else {
            newItem.quantity++
            setCart([...cart])
            setSize(size + 1)
        }
        setItems([...items])
    }

  return (
    <div id="container" className="flex flex-col h-screen place-items-center">
        <nav className="w-screen">
            <Navigation />
        </nav>
        <Navbar size={size} setShowCart={setShowCart}/>
        { showCart ? <Cart cart={cart} handleAdd={handleAdd} quantityChange={quantityChange}/> : 
        <Shop items={products} handleAdd={handleAdd} quantityChange={quantityChange}/>}
    </div>
  )
}

export default ShoppingCart