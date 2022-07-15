import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { Card, Categories, Search, Header } from '../../components';
import Skeleton from '../../components/Card/Skeleton';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setCategory } from '../../redux/Filter/slice';
import { fetchDishes } from '../../redux/Dishes/asyncAction';
import cart from '../../images/cartIconItem.svg';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryID, value } = useSelector((state: any) => state.FilterReducer);
  const { items, status } = useSelector((state: any) => state.DishesReducer);
  const dishes = items.map((obj: any) => <Card key={obj.id} {...obj} />);
  const lazySkeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  const category = categoryID;
  const [modal, setModal] = React.useState(false);
  const ChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategory(idx));
  }, []);

  const getItems = async () => {
    const search = value > 0 ? `&search=${value}` : '';
    const categories = category > 0 ? `category=${category}` : '';
    dispatch(
      fetchDishes({
        categories,
        search,
      }),
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getItems();
  }, [value, categoryID]);
  return (
    <div>
      <Header />
      <Search />
      <Categories categories={category} onClickCategory={ChangeCategory} />
      <div className={styles.scroll}>
        {status === 'error' ? (
          <div>Ошибка</div>
        ) : (
          <div className={styles.wrapper}>{status === 'loading' ? lazySkeleton : dishes}</div>
        )}
      </div>
      {!modal && (
        <div className={styles.modal}>
          <img src={cart} alt="cart" />
          <div className={styles.content}>
            <div>2 items</div>
            <div className={styles.price}>$22.97</div>
          </div>
          <Link to="/cart" className={styles.btn}>
            Check out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
