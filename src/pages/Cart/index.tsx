import React from 'react';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { OrderCard } from '../../components';
import { fetchDishes } from '../../redux/Dishes/asyncAction';
import { setItems } from '../../redux/Cart/slice';

const Cart: React.FC = () => {
  const { items } = useSelector((state: any) => state.CartReducer);
  console.log(items);
  // React.useEffect(() => {
  //   // fetchDishes({});
  //   // return () => {};
  // }, []);

  return (
    <div>
      <h2>You Order</h2>
      <div className={styles.scroll}>
        <div className={styles.wrapper}>
          {items.map((obj: any) => (
            <OrderCard key={obj.id} {...obj} />
          ))}
        </div>
      </div>
      <div className={styles.totalPrice}>
        <div className={styles.subtotal}>
          <div className={styles.text}>Sub total</div>
          <span>$ 132</span>
        </div>
        <div className={styles.total}>
          <div className={styles.text}>Sub total</div>
          <span>$ 132</span>
        </div>
      </div>
      <button className={styles.btn}>Pay now</button>
    </div>
  );
};

export default Cart;
