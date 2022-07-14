import React from 'react';
import { useSelector } from 'react-redux';
import { OrderCard } from '../../components';
import styles from './Cart.module.scss';

const Cart: React.FC = () => {
  const { items, status } = useSelector((state: any) => state.DishesReducer);

  return (
    <div>
      <h2>You Order</h2>
      <div className={styles.wrapper}>
        {items.map((obj: any) => (
          <OrderCard key={obj.id} {...obj} />
        ))}
      </div>
      <div className={styles.totalPrice}>
        <div className={styles.subtotal}>
          <div className={styles.text}>Sub total</div>
          <span>132</span>
        </div>
        <div className={styles.total}>
          <div className={styles.text}>Sub total</div>
          <span>132</span>
        </div>
      </div>
      <button className={styles.btn}>Pay now</button>
    </div>
  );
};

export default Cart;
