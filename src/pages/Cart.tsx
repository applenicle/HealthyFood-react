import React from 'react';
import bin from '../images/bin.svg';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { clearCart } from '../redux/Cart/slice';
import { CartItem, EmptyCart } from '../components';

const Cart: React.FC = () => {
  const { cartItems, totalPrice } = useAppSelector((state) => state.CartReducer);
  const dispatch = useAppDispatch();
  if (!totalPrice) {
    return <EmptyCart title={'Your Cart is Empty'} />;
  }
  return (
    <div>
      <div className="cart__title">
        <h2>You Order</h2>
        <img onClick={() => dispatch(clearCart())} src={bin} alt="clear" />
      </div>
      <div className="scroll">
        <div>
          {cartItems?.map((obj) => (
            <CartItem key={obj.id} {...obj} />
          ))}
        </div>
      </div>
      <div className="cart__total-price">
        <div className="cart__subtotal">
          <div className="cart__text">Sub total</div>
          <span>$ {Math.floor(totalPrice * 100) / 100}</span>
        </div>
        <div className="cart__total">
          <div className="cart__text">Total</div>
          <span>$ {Math.floor(totalPrice + (totalPrice * 3) / 100)}</span>
        </div>
      </div>
      <button className="cart__main-btn">Pay now</button>
    </div>
  );
};

export default Cart;
