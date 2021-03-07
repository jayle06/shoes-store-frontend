import React from 'react';
import data from '../data';
import {useParams} from 'react-router-dom';
// import axios from 'axios';

function Detail() {

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
                <h3>{product.title}</h3>
                <span>${product.price}</span>
                <p>{product.colors}</p>
                <button>Add to cart</button>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default Detail
