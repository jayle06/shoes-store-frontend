import React, {useState} from 'react';
import data from '../data';
import {Link,useParams} from 'react-router-dom';
// import axios from 'axios';
import '../css/Detail.css';

function Detail() {
    const [quantity, setQuantity] = useState(1);
    const plusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const minusQuantity = () => {
        setQuantity(quantity <= 1 ? 1 : quantity - 1);
    }
    // const[product, setProduct] = useState(null);
    let {id} = useParams();
    const product = data.products.find(product => product._id === id);
    if(!product){
        return <div>404 Not Found!!!</div>;
    } 
    
    return (
        <div className="detail">
            <img src={product.src} alt={product.title} />
            <div className="detail-content">
                <div className="detail-content-row">
                    <h3>{product.title}</h3>
                    <span>${product.price}</span>
                </div>
                <p>
                    {product.colors.map((color, index) => (
                        <button className="button-color" key={index} style={{ background:color}}></button>))}
                </p>
                <div className="detail-quantity">
                    <span>Quantity: </span>
                    <button className="button-logic" onClick={minusQuantity}>-</button>
                    <button className="button-number">{quantity}</button>
                    <button className="button-logic" onClick={plusQuantity}>+</button>
                </div>
                <Link to='/cart' className="button-add-to-cart">
                    Add to cart
                </Link>
                <p>{product.description}</p>
                <p>{product.content}</p>
            </div>
        </div>
    )
}

export default Detail
