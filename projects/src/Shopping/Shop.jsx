import React from 'react'
import '../index.css'
import Card from './Card'
import { useState } from 'react'

const Shop = ({items, handleAdd, quantityChange}) => {
    
  return (
    <div className="flex flex-row flex-wrap p-10 justify-between w-11/12">
        {items.map((item) => {
            return <Card item={item} key={item.id} handleAdd={handleAdd} quantityChange={quantityChange}/>
        })}
    </div>
  )
}

export default Shop