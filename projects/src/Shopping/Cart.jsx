import React from 'react'
import '../index.css'
import Card from './Card'

const Cart = ({cart, handleAdd, quantityChange}) => {
  return (
    <>
    {cart.length === 0 ? <h1>Your cart is empty</h1> : <div className="flex flex-row flex-wrap p-10 w-11/12">
        {cart.map((item) => {
            return <Card item={item} key={item.id} handleAdd={handleAdd} quantityChange={quantityChange}/>
        })}
    </div>}
    </>
  )
}

export default Cart