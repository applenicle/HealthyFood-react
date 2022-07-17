import React from 'react';
import styles from './Cart.module.scss';
import bin from '../../images/bin.svg';
import { EmptyCart, OrderCard } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { clearCart } from '../../redux/Cart/slice';

const Cart: React.FC = () => {
  const { cartItems, totalPrice } = useAppSelector((state) => state.CartReducer);
  const dispatch = useAppDispatch();
  if (!totalPrice) {
    return <EmptyCart />;
  }
  return (
    <div>
      <div className={styles.title}>
        <h2>You Order</h2>
        <img onClick={() => dispatch(clearCart())} src={bin} alt="clear" />
      </div>
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
