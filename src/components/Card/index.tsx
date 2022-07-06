import React from 'react';
import styles from './Card.module.scss';
import food from '../../images/Image.png';
import star from '../../images/Star.svg';
// import favourite from '../../images/fav.svg';
import heart from '../../images/Heart.svg';
import miniCart from '../../images/mini-cart.svg';

const Card = () => {
  return (
    <div className={styles.block}>
      <div className={styles.images}>
        <img className={styles.fav} src={heart} alt="favourite" />
        <img className={styles.dish} src={food} alt="Pictures" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Shrimp Pasta</h2>
        <div className={styles.time}>
          24min •
          <span className={styles.rate}>
            <img src={star} alt="star" /> 4.5
          </span>
        </div>
        <div className={styles.price}>
          <p className={styles.text}>
            $12<span>.99</span>
          </p>
          <img className={styles.cart} src={miniCart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
