import React from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import star from '../images/fav.svg';
import clock from '../images/clock.svg';
import fire from '../images/fire.svg';
import cart from '../images/cartMini.svg';
import back from '../images/back.svg';
import like from '../images/HeartItem.svg';
import { useAppSelector } from '../hooks/redux-hooks';

const Details: React.FC = () => {
  const [dishes, setDishes] = React.useState<{
    title: string;
    price: number;
    time: number;
    rating: number;
    about: number;
    imageUrl: string;
    kcal: number;
  }>();

  const { totalCount } = useAppSelector((state) => state.CartReducer);

  let { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchDishes() {
      try {
        const { data } = await axios.get(`https://62c96901d9ead251e8bb4e90.mockapi.io/f/` + id);
        return setDishes(data);
      } catch (error) {
        navigate(`/`);
      }
    }
    fetchDishes();
  }, []);

  if (!dishes) return <>Loading</>;
  return (
    <div className="details">
      <div className="details__icon">
        <div className="details__back">
          <Link to="/">
            <img src={back} alt="bacl" />
          </Link>
        </div>
        <div className="details__like">
          <img src={like} alt="like" />
        </div>
      </div>
      <div className="details__content">
        <h2>{dishes.title}</h2>
        <div className="details__price">$ {dishes.price}</div>
        <div className="details__quanity">
          <div>
            <img src={dishes.imageUrl} alt="" />
            <div className="details__counter">
              <div>-</div>
              <span>{totalCount}</span>
              <div>+</div>
            </div>
          </div>
        </div>
        <div className="details__info">
          <div>
            <img src={clock} alt="clock" />
            <div>{dishes.time} min</div>
          </div>
          <div>
            <img src={star} alt="star" />
            <div>{dishes.rating}</div>
          </div>
          <div>
            <img src={fire} alt="fire" />
            <div>{dishes.kcal}Kcal</div>
          </div>
        </div>
        <div>
          <h5 className="details__title">About</h5>
          <p className="details__text">{dishes.about}</p>
        </div>
        <Link to="/cart" className="details__btn">
          <img src={cart} alt="cart" />
          <div>Add to Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default Details;
