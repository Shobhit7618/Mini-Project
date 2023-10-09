import React, { useState } from 'react';
import shopData from './dummyData';
import { Link } from 'react-router-dom';

const Shopslist = () => {
    const [productsArray] = useState(shopData);
    return (

        <div>
            <header className='bg-dark'>
                <div className='container py-5'>
                    <h1 className='text-center mb-5 text-white fw-bold'>Shops Listing Page</h1>
                </div>
            </header>
            <div className='row mt-4'>
                <div className='col-12'>
                    <div className='container'>
                        <div className='row'>
                            {productsArray.map((product) => (
                                <div className="col-md-3">
                                    <div className="card" style={{ overflow: 'hidden' }}>
                                        <img src={product.image} alt="" className='my-card-img' />
                                        <div className='card-body'>
                                            <h4>{product.name}</h4>
                                            <p>{product.address}</p>

                                            <Link to={'/itemslist/'+product.name} className='btn btn-primary'>View Shop</Link>
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

export default Shopslist