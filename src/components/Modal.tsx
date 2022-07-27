import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../images/mini-cart-orange.svg';
import { useAppSelector } from '../hooks/redux-hooks';

const Modal: React.FC = () => {
  const { totalPrice, totalCount, modal } = useAppSelector((state) => state.CartReducer);

  return (
    <>
      {modal && modal === true ? (
        <div className="card__modal">
          <img src={cart} alt="cart" />
          <div>
            <div>{totalCount} items</div>
            <div>${Math.floor(totalPrice * 100) / 100}</div>
          </div>
          <Link to="/cart" className="card__modal--btn">
            Check out
          </Link>
        </div>
      ) : (
        <div className="card__hide--modal"></div>
      )}
    </>
  );
};

export default Modal;
