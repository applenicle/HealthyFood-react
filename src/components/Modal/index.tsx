import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Modal.module.scss';
import cart from '../../images/cartIconItem.svg';
import { useAppSelector } from '../../hooks/redux-hooks';

const Modal: React.FC = () => {
  const { totalPrice, totalCount, modal } = useAppSelector((state) => state.CartReducer);

  return (
    <>
      {modal && modal === true ? (
        <div className={styles.modal}>
          <img src={cart} alt="cart" />
          <div className={styles.content}>
            <div>{totalCount} items</div>
            <div className={styles.price}>${Math.floor(totalPrice * 100) / 100}</div>
          </div>
          <Link to="/cart" className={styles.btn}>
            Check out
          </Link>
        </div>
      ) : (
        <div className={styles.hideModal}></div>
      )}
    </>
  );
};

export default Modal;
