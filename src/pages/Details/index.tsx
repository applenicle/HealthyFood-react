import React from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './Details.module.scss';
import star from '../../images/fav.svg';
import clock from '../../images/clock.svg';
import fire from '../../images/fire.svg';
import cart from '../../images/cartMini.svg';
import back from '../../images/back.svg';
import like from '../../images/HeartItem.svg';
import { fetchDishes } from '../../redux/Dishes/asyncAction';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { removeItem, addItem } from '../../redux/Cart/slice';

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
    <div className={styles.details}>
      <div className={styles.icon}>
        <div className={styles.back}>
          <Link to="/">
            <img src={back} alt="back" />
          </Link>
        </div>
        <div className={styles.like}>
          <img src={like} alt="like" />
        </div>
      </div>
      <div className={styles.content}>
        <h2>{dishes.title}</h2>
        <div className={styles.price}>$ {dishes.price}</div>
        <div className={styles.quanity}>
          <div>
            <img src={dishes.imageUrl} alt="" />
            <div className={styles.counter}>
              <div>-</div>
              <span>0</span>
              <div>+</div>
            </div>
          </div>
        </div>

        <div className={styles.info}>
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
        <>
          <h5 className={styles.title}>About</h5>
          <p className={styles.text}>{dishes.about}</p>
        </>
        <div className={styles.btn}>
          <img src={cart} alt="cart" />
          <div>Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
