import React, { useRef } from 'react'
import useCartContext from '../CartContext'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

  const { cartItems, removeItemFromCart, setCartItems } = useCartContext();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const addressRef = useRef(null);
  const navigate = useNavigate();

  const saveOrder = async () => {
    const res = await fetch('http://localhost:5000/order/add', {
      method: 'POST',
      body: JSON.stringify({
        items: cartItems,
        user: currentUser._id,
        address: addressRef.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    // success alert
    setCartItems([]);
    navigate('/vieworders')
  }



  const displayCartItems = () => {
    if (!cartItems.length) return <h1 className='text-center display-4 text-muted'>
      No Items in Cart
    </h1>
    return <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>

          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((item, index) => {

              return <tr>
                <td>
                  <img height={50} src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => { removeItemFromCart(index) }}>Remove</button>
                </td>
              </tr>

            })
          }
        </tbody>
      </table>
      <div className='card'>
        <div className="card-header">
          <h4>Address</h4>
        </div>
        <div className="card-body">
          <textarea className='form-control' ref={addressRef}></textarea>
          <button className='btn btn-primary mt-3' onClick={saveOrder}>Place Order</button>
        </div>
      </div>
    </div>
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