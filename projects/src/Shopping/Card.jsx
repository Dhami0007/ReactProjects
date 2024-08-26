import React from 'react'
import { useState } from 'react'

const Card = ({item, key, handleAdd, quantityChange}) => {

    const product = item
    console.log(product.added===false)

  return (
    <div key={key} className="p-2 m-3  flex flex-col place-items-center bg-slate-100 border-2 border-slate-200 rounded-lg shadow-sm shadow-slate-400">
        <h2 className="bg-yellow-50 w-full text-center font-semibold m-2 rounded-md">{product.name}</h2>
        <img src={product.image} alt={product.name} className="h-40 w-40 rounded-lg"/>
            
        <div className="flex flex-row justify-between w-full pt-3">
            <p className="font-semibold">${product.price}</p>
            { product.added === false ? (<button className="bg-slate-200 shadow-sm shadow-slate-300 px-2 rounded-md" onClick={()=>handleAdd(product.id)}>Add to cart</button>) : (
            <>
            <button onClick={()=>quantityChange(product.id,"neg")}>-</button>
            <p>{product.quantity}</p>
            <button onClick={()=>quantityChange(product.id,"pos")}>+</button>
            </>)
            }

        </div>
    
    </div>
  )
}

export default Card