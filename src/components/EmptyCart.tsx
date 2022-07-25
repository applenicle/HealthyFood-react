import React from 'react';
import { Link } from 'react-router-dom';
import woman from '../images/woman.png';

type EmptyCartProps = {
  title: string;
};

const EmptyCart: React.FC<EmptyCartProps> = ({ title }) => {
  return (
    <div className="cart-center">
      <h2>{title}</h2>
      <img src={woman} alt="cart" />
      <p>Add something to make me happy :)</p>
      <Link to="/">
        <button>Countinue shopping</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
