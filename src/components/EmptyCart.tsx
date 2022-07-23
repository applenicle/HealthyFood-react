import React from 'react';
import { Link } from 'react-router-dom';
import woman from '../images/woman.png';

const EmptyCart: React.FC = () => {
  return (
    <div className="cart-center">
      <h2>Your Cart is Empty</h2>
      <img src={woman} alt="cart" />
      <p>Add something to make me happy :)</p>
      <Link to="/">
        <button>Countinue shopping</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
