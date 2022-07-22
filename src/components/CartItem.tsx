import React from 'react';
import { useAppDispatch } from '../hooks/redux-hooks';
import { addItem, removeItem } from '../redux/Cart/slice';
type OrderCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  id: string;
};

const CartItem: React.FC<OrderCardProps> = ({ title, price, imageUrl, count, id }) => {
  const dispatch = useAppDispatch();
  const setAddCount = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };
  const setRemoveCount = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      count,
    };
    dispatch(removeItem(item));
  };
  const priceNumber = ([price] + '').split('.');

  return (
    <div className="card__wrapper">
      <div className="cart__block">
        <img src={imageUrl} alt="dishes" />
        <div className="cart__description">
          <h4 className="cart__subtitle">{title}</h4>
          <span>Foodbase</span>
          <div>
            ${priceNumber[0]}
            <span>.{priceNumber[1]}</span>
          </div>
        </div>
        <div className="cart__counter">
          <div onClick={setRemoveCount} className={count > 1 ? 'cart__btn--active' : 'cart__btn'}>
            -
          </div>
          <div className="cart__number">{count}</div>
          <div onClick={setAddCount} className="cart__btn--active">
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
