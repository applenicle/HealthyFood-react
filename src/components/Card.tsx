import React from 'react';
import { Link } from 'react-router-dom';
import star from '../images/Star.svg';
// import favourite from '../../images/fav.svg';
// import heart from '../../images/Heart.svg';
import miniCart from '../images/mini-cart.svg';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { addItem, setModal } from '../redux/Cart/slice';

type CardProps = {
  title: string;
  imageUrl: string;
  time: number;
  price: number;
  rating: number;
  id: string;
};

const Card: React.FC<CardProps> = ({ title, imageUrl, rating, time, price, id }) => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.CartReducer);
  const toggleModal = () => {
    const timer = setInterval(() => dispatch(setModal(!modal)), 3000);
    setTimeout(() => {
      clearInterval(timer);
    }, 4000);
  };
  const onClickAddToCart = () => {
    toggleModal();
    const item = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };
  const priceNumber = ([price] + '').split('.');

  return (
    <div className="card__block">
      <div className="card__images">
        <div className="card__fav"></div>
        {/* <img className="card__fav" src={heart} alt="favourite" /> */}
        <Link to={`/details/${id}`}>
          <img className="card__dish" src={imageUrl} alt="Pictures" />
        </Link>
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <div className="card__time">
          {time} min •
          <img src={star} alt="star" />
          {rating}
        </div>
        <div className="card__price">
          <div className="card__text">
            ${priceNumber[0]}
            <span>.{priceNumber[1]}</span>
          </div>
          <img onClick={onClickAddToCart} className="card__cart" src={miniCart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Card;
