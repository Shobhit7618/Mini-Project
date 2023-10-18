import React, { useState } from 'react';
import items from './dummyData';
import { useParams } from 'react-router-dom';
import useCartContext from '../CartContext';
import Swal from 'sweetalert2';

const Itemslist = () => {

    const{addItemToCart}= useCartContext();

    const {shopname} = useParams();
    const [shopData, setShopData] = useState(
        items.find((item) => item.name === shopname)
    );

    console.log(shopData);
    // if(res.status === 200){
    //     Swal.fire({
    //       icon : 'success',
    //       title : 'Item added to Cart',
    //       text : 'Go to Cart'
    //     });
    //   }else{
    //     Swal.fire({
    //       icon : 'error',
    //       title : 'Error',
    //       text : 'Something went wrong!!'
    //     })
    //   }

    return (


        <div>
            <header className='bg-dark'>
                <div className='container py-5'>
                    <h1 className='text-center mb-5 text-white fw-bold'>Items Listing Page</h1>
                </div>
            </header>
            <div className='row mt-4'>
                <div className='col-12'>
                    <div className='container-fluid'>
                        <div className='row'>
                            {shopData.items.map((product) => (
                                <div className="col-md-2">
                                    <div className="card" style={{ overflow: 'hidden' }}>
                                        <img src={product.image} alt="" className='my-card-img' />
                                        <div className='card-body'>
                                            <h4>{product.name}</h4>
                                            <h4> ₹ {product.price}</h4>
                                            <button onClick={()=>{addItemToCart(product)}} className='btn btn-primary'>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Itemslist