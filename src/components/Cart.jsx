import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQ, incrementQ, removeItem } from '../features/cartSlice';
import Footer from './Footer';
import { BsTrash } from 'react-icons/bs';
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items) || [];
  const dispatch = useDispatch();

  const handleDecrement = (itemId, quantity) => {
    if (quantity <= 1) {
      dispatch(removeItem(itemId));
    } else {
      dispatch(decrementQ(itemId));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);

      if (!isNaN(price) && !isNaN(quantity)) {
        return acc + price * quantity;
      } else {
        console.error("Invalid price or quantity for item:", item);
        return acc;
      }
    }, 0);
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
         <h1 className='cart__title'>Shopping cart</h1>
          {cartItems.map((item) => (
            <div className='cart' key={item.id}>
              <img src={item.imgUrl} alt={item.name} className='cart__img' />
              <h4 className='cart__item-name'>{item.name}</h4>
              <button className='cart__button' onClick={() => handleDecrement(item.id, item.quantity)}>-</button>
              <button className='cart__button' onClick={() => dispatch(incrementQ(item.id))}>+</button>
              <p className='cart__quantity'>{item.quantity}</p>
              <p className='cart__price'>{(parseFloat(item.price) * item.quantity)} GPB</p>
              <button onClick={() => dispatch(removeItem(item.id))} className='cart__bin'>
                <BsTrash />
              </button>
            </div>
          ))}
          <p className='cart__total-price'>Total price: <span className='price'>{String(getTotalPrice())} GPB</span></p>
          <Footer />
        </>
      ) : 
      <p className='cart__empty'>Your cart is empty!</p> }
    </div>
  );
}

export default Cart;
