import React from 'react';
import Data from "../data/Data.json";
import { useDispatch } from 'react-redux';
import { addToCart } from "../features/cartSlice";
import { useParams } from 'react-router-dom';
import "../styles/productDetails.css";

const ProductDetail = () => {
  const products = Data;
  const params = useParams();
  const productId = params.productId;

  const dispatch = useDispatch();

  const handleAddToCart = (e, selectedItem) => {
    e.preventDefault();
    e.stopPropagation();
    const item = { ...selectedItem, quantity: 1 };
    dispatch(addToCart(item));
};

  if (!productId) {
    return <div>Product ID is missing</div>;
  }

  const selectedProduct = products.find(product => product.id === parseInt(productId, 10));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className='item'>
      <h2 className='item__name'>{selectedProduct.name}</h2>
      <img className='item__image' alt={selectedProduct.name} 
      src={selectedProduct.imgUrl} />
      <div className='item__buy-it'>
        <p className='item__buy-it__price'> {selectedProduct.price}</p>
        <button className="item__button"
        onClick={(e) => handleAddToCart(e, selectedProduct)}
        > 
        + Add to Cart
        </button>
      </div>
      <p className='item__details'>{selectedProduct.description}</p>
    </div>
  );
};

export default ProductDetail;