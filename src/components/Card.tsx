import React from 'react';
import { Link } from 'react-router-dom';
import star from '../images/Star.svg';
import unfavourite from '../images/unfav.svg';
import miniCart from '../images/mini-cart.svg';
import { useAppDispatch } from '../hooks/redux-hooks';
import { addItem } from '../redux/Cart/slice';
import { addToFavourite, removeFavourite } from '../redux/Favourite/slice';

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
  const item = {
    id,
    title,
    imageUrl,
    price,
    time,
    count: 0,
  };
  const [fav, setFav] = React.useState(!true);
  const dispatch = useAppDispatch();
  // const { modal } = useAppSelector((state) => state.CartReducer);
  // const toggleModal = () => {
  //   const timer = setInterval(() => dispatch(setModal(!modal)), 3000);
  //   setTimeout(() => {
  //     clearInterval(timer);
  //   }, 4000);
  // };
  const onClickAddToCart = () => {
    // toggleModal();
    dispatch(addItem(item));
  };
  const addFav = () => {
    dispatch(addToFavourite(item));
  };
  const removeFav = () => {
    dispatch(removeFavourite(id));
  };

  return (
    <div className="card__block">
      <div className="card__images">
        <div onClick={() => setFav(!fav)}>
          {fav ? (
            <img onClick={removeFav} className="card__fav" src={unfavourite} alt="fav" />
          ) : (
            <img onClick={addFav} className="card__fav--active" src={unfavourite} alt="fav" />
          )}
        </div>

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
