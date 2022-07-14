import React from 'react';
import styles from './OrderCard.module.scss';
type OrderCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};

const OrderCard: React.FC<OrderCardProps> = ({ title, price, imageUrl, count }) => {
  return (
    <div className={styles.block}>
      <img
        src="https://img.freepik.com/free-photo/top-view-delicious-seafood-composition_23-2148926779.jpg?t=st=1657436298~exp=1657436898~hmac=3d4393259988aaf63056f5d79b8b2aaa40111adda664202cdfbabb105e2ae6d8&w=1800"
        alt="dishes"
      />
      <div className={styles.description}>
        <h4 className={styles.title}>{title}</h4>
        <span>Foodbase</span>
        <div>
          $10<span>.49</span>
        </div>
      </div>
      <div className={styles.counter}>
        <div className={styles.btn}>-</div>
        <div className={styles.number}>1</div>
        <div className={styles.btnActive}>+</div>
      </div>
    </div>
  );
};

export default OrderCard;
