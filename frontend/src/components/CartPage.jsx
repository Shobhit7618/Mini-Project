import React from 'react'
import useCartContext from '../CartContext'

const CartPage = () => {

    const {cartItems, removeItemFromCart}= useCartContext();
    const displayCartItems=()=>{
      if(!cartItems.length) return <h1 className='text-center display-4 text-muted'>
        No Items in Cart
      </h1>
      return <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((item,index)=>{
              
               return <tr>
                  <td>
                    <img height={50} src={item.image} alt="" />
                  </td>
                  <td>{item.brand} {item.model}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>{removeItemFromCart(index)}}>Remove</button>
                  </td>
                </tr>
              
            })
          }
        </tbody>
      </table>
    }
  return (
    <div>
        <div className='container py-5'>
          {displayCartItems()}
        </div>
    </div>
  )
}

export default CartPage;