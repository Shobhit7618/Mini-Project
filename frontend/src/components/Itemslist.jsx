import React, { useState } from 'react';
import items from './dummyData';

const Itemslist = () => {
    const[productsArray]=useState(items);
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
            {productsArray.map((product) => (
                <div className="col-md-2">
                    <div className="card" style={{ overflow: 'hidden' }}>
                        <img src={product.image} alt="" className='my-card-img' />
                        <div className='card-body'>
                            <h4>{product.name}</h4>
                            <h4>{product.price}</h4>
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