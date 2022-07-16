import React from 'react';
import styles from './Cart.module.scss';
import { OrderCard } from '../../components';
import { useAppSelector } from '../../hooks/redux-hooks';

const Cart: React.FC = () => {
  const { cartItems, totalPrice } = useAppSelector((state) => state.CartReducer);
  return (
    <div>
      <h2>You Order</h2>
      <div className={styles.scroll}>
        <div className={styles.wrapper}>
          {cartItems.map((obj: any) => (
            <OrderCard key={obj.id} {...obj} />
          ))}
        </div>
      </div>
      <div className={styles.totalPrice}>
        <div className={styles.subtotal}>
          <div className={styles.text}>Sub total</div>
          <span>$ {Math.floor(totalPrice * 100) / 100}</span>
        </div>
        <div className={styles.total}>
          <div className={styles.text}>Total</div>
          <span>$ {Math.floor(totalPrice + (totalPrice * 3) / 100)}</span>
        </div>
      </div>
      <button className={styles.btn}>Pay now</button>
    </div>
  );
};

export default Cart;
