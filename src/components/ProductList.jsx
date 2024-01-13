import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import Data from '../data/Data.json';
import { Link } from 'react-router-dom';
import '../styles/productList.css';

const ProductList = ({ searchTerm }) => {
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = (e, selectedItem) => {
        e.preventDefault();
        e.stopPropagation();
        const item = { ...selectedItem, quantity: 1 };
        dispatch(addToCart(item));

        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 10000);
    };

    const maxLength = 55;

    const filteredData = Data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="cards">
            {filteredData.map((item) => (
                <div key={item.id} className="card">
                    <Link to={`/products/${item.id}`} key={item.id} className="card-link">
                        <img src={item.imgUrl} alt="cardImage" className="card__image" />
                        <h4 className="card__name">
                            {item.name.substring(0, maxLength)}
                            {item.name.length > maxLength ? '...' : ''}
                        </h4>
                    </Link>
                    <p className="card__price">{item.price}</p>
                    <button
                        className="card__button"
                        onClick={(e) => handleAddToCart(e, item)}
                    >
                        + Add to Cart
                    </button>
                </div>
            ))}
            {showAlert && (
                <div className="custom-alert">
                    The product has been successfully added to the cart
                </div>
            )}
        </div>
    );
};

export default ProductList;
