import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import '../css/Products.css';

function Products() {
    const products = data.products;
    if(!products){
        return <div>404 Not Found!!!</div>;
    }
    return (
        <div className="product">
            {
                products.map(product => (
                    <div className="product-card" key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <img src={product.src} alt={product.title} />
                        </Link>
                        <div className="product-content">
                            <h3>
                                <Link to={`/products/${product._id}`}>
                                    {product.title}
                                </Link>
                            </h3>
                            <span>${product.price}</span>
                            <button>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
