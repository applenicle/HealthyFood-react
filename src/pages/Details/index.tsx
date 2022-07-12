import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Details.module.scss';
import star from '../../images/fav.svg';
import clock from '../../images/clock.svg';
import fire from '../../images/fire.svg';
import cart from '../../images/cartMini.svg';
import back from '../../images/back.svg';
import like from '../../images/HeartItem.svg';

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
        <div className={styles.price}>
          $10<span>.49</span>
        </div>
        <div className={styles.quanity}>
          <div>
            <img src={dishes.imageUrl} alt="" />
            <div>
              -<span>2</span>+
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
            <div>{dishes.rating}(1.2k)</div>
          </div>
          <div>
            <img src={fire} alt="fire" />
            <div>{dishes.kcal}Kcal</div>
          </div>
        </div>
        <div>
          <h5 className={styles.title}>About</h5>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio doloremque porro
            similique quos voluptatem natus.
          </p>
        </div>
        <div className={styles.btn}>
          <img src={cart} alt="cart" />
          <div>Add to Cart</div>d
        </div>
      </div>
    </div>
  );
};

export default Details;
