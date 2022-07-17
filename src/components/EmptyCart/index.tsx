import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';
import woman from '../../images/woman.png';

const EmptyCart = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Your Cart is Empty</h2>
      <img src={woman} alt="cart" />
      <p>Add something to make me happy :)</p>
      <Link to="/" className={styles.btn}>
        <button>Countinue shopping</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
