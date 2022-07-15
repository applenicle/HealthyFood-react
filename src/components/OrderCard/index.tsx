import React from 'react';
import styles from './OrderCard.module.scss';
type OrderCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};

const OrderCard: React.FC<OrderCardProps> = ({ title, price, imageUrl, count }) => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className={styles.scroll}>
      <div className={styles.block}>
        <img src={imageUrl} alt="dishes" />
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <span>Foodbase</span>
          <div>
            ${price}
            {/* $10<span>.49</span> */}
          </div>
        </div>
        <div className={styles.counter}>
          <div
            onClick={() => setCounter(counter - 1)}
            className={counter > 0 ? styles.btnActive : styles.btn}>
            -
          </div>
          <div className={styles.number}>{counter}</div>
          <div onClick={() => setCounter(counter + 1)} className={styles.btnActive}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
