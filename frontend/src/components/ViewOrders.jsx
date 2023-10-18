import React, { useEffect } from 'react'
import { useState } from 'react'

const ViewOrders = () => {

    const [orderList, setOrderList] = useState([]);

    const fetchOrderData = async () => {
        const res = await fetch('http://localhost:5000/order/getall');
        const data = await res.json();
        console.log(data);
        setOrderList(data);
    }

    useEffect(() => {
        fetchOrderData();
    }, [])


    return (
        <div>
            <div className='container'>
                <h1 className='text-center my-5'>View Orders</h1>
                <hr />

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Address</th>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(order => (
                                <tr>
                                    <td>{order._id}</td>
                                    <td>{order.user.name}</td>
                                    <td>{order.address}</td>
                                    <td>
                                        <details>
                                            <summary>View More</summary>
                                            {order.items.map((item) => {
                                                return <div className="d-flex mb-2">
                                                    <img height={50} width={100} style={{objectFit: 'contain'}} src={item.image} alt="" />
                                                    <div>
                                                        <h5 className='m-0'>{item.name}</h5>
                                                        <p className='m-0'>₹{item.price}</p>
                                                    </div>
                                                </div>
                                            })}
                                        </details>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ViewOrders