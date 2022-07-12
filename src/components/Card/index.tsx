import React from 'react';
import styles from './Card.module.scss';
import star from '../../images/Star.svg';
// import favourite from '../../images/fav.svg';
import heart from '../../images/Heart.svg';
import miniCart from '../../images/mini-cart.svg';

type CardProps = {
  title: string;
  imageUrl: string;
  time: number;
  price: number;
  rating: number;
};

const Card: React.FC<CardProps> = ({ title, imageUrl, rating, time, price }) => {
  const priceNumber = ([price] + '').split('.');
  return (
    <div className={styles.block}>
      <div className={styles.images}>
        <img className={styles.fav} src={heart} alt="favourite" />
        <img className={styles.dish} src={imageUrl} alt="Pictures" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.time}>
          {time} min •
          <span className={styles.rate}>
            <img src={star} alt="star" /> {rating}
          </span>
        </div>
        <div className={styles.price}>
          <p className={styles.text}>
            ${priceNumber[0]}
            <span>.{priceNumber[1]}</span>
          </p>
          <img className={styles.cart} src={miniCart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Card;
