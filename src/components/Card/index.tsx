import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import star from '../../images/Star.svg';
// import favourite from '../../images/fav.svg';
import heart from '../../images/Heart.svg';
import miniCart from '../../images/mini-cart.svg';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addItem } from '../../redux/Cart/slice';

type CardProps = {
  title: string;
  imageUrl: string;
  time: number;
  price: number;
  rating: number;
  id: string;
};

const Card: React.FC<CardProps> = ({ title, imageUrl, rating, time, price, id }) => {
  const priceNumber = ([price] + '').split('.');
  const dispatch = useAppDispatch();
  const onClickAddToCart = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={styles.block}>
      <div className={styles.images}>
        <img className={styles.fav} src={heart} alt="favourite" />
        <Link to={`/details/${id}`}>
          <img className={styles.dish} src={imageUrl} alt="Pictures" />
        </Link>
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
          <img onClick={onClickAddToCart} className={styles.cart} src={miniCart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Card;
