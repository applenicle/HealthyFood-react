import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

import { Card, Categories, Search, Header } from '../../components';
import Skeleton from '../../components/Card/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/slices/Filter/FilterSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [items, setItems] = React.useState([{}]);
  const dishes = items.map((obj: any) => <Card key={obj.id} {...obj} />);
  const lazySkeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  const { categoryID, value } = useSelector((state: any) => state.FilterReducer);
  const categories = categoryID;
  const ChangeCategory = (i: number) => {
    dispatch(setCategory(i));
  };

  React.useEffect(() => {
    const search = value > 0 ? `&search=${value}` : '';
    const categories = categoryID > 0 ? `category=${categoryID}` : '';

    axios
      .get(`https://62c96901d9ead251e8bb4e90.mockapi.io/f?${categories}${search}`)
      .then((res: any) => {
        console.log(res.data);
        return setItems(res.data);
      })
      .catch((err: any) => console.log(err));
    window.scroll(0, 0);
    // return () => {};
  }, [categoryID, value]);

  return (
    <div>
      <Header />
      <Search />
      <Categories categories={categories} onClickCategory={ChangeCategory} />
      <div className={styles.block}>
        <h3 className={styles.title}>Most Popular</h3>
        <Link className={styles.all} to="/products">
          View all
        </Link>
      </div>
      <div className={styles.wrapper}>{dishes}</div>
      {/* // status === ERROR ? <div>Ошибка</div>{' '} */}
      {/* : ( <div className={styles.wrapper}>{status === SUCCESS ? lazySkeleton : dishes}</div>) */}
    </div>
  );
};

export default Home;
