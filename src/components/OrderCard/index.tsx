import React from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addItem, removeItem } from '../../redux/Cart/slice';
import styles from './OrderCard.module.scss';
type OrderCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  id: string;
};

const OrderCard: React.FC<OrderCardProps> = ({ title, price, imageUrl, count, id }) => {
  const dispatch = useAppDispatch();
  const setAddCount = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };
  const setRemoveCount = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      count,
    };
    dispatch(removeItem(item));
  };
  const priceNumber = ([price] + '').split('.');

  return (
    <div className={styles.scroll}>
      <div className={styles.block}>
        <img src={imageUrl} alt="dishes" />
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <span>Foodbase</span>
          <div>
            ${priceNumber[0]}
            <span>.{priceNumber[1]}</span>
          </div>
        </div>
        <div className={styles.counter}>
          <div onClick={setRemoveCount} className={count > 1 ? styles.btnActive : styles.btn}>
            -
          </div>
          <div className={styles.number}>{count}</div>
          <div onClick={setAddCount} className={styles.btnActive}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
