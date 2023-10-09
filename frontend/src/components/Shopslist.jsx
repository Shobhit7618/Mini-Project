import React, { useState } from 'react';
import shopData from './dummyData';

const Shopslist = () => {
    const[productsArray]=useState(shopData);
  return (
    
    <div>
    <header className='bg-dark'>
        <div className='container py-5'>
            <h1 className='text-center mb-5 text-white fw-bold'>Shops Listing Page</h1>
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
                            <h4>{product.address}</h4>
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