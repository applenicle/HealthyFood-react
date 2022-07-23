import React from 'react';
import { Card, Categories, Search, Header, Modal } from '../components';
import Skeleton from '../components/Skeleton';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { setCategory } from '../redux/Filter/slice';
import { fetchDishes } from '../redux/Dishes/asyncAction';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryID, value } = useAppSelector((state: any) => state.FilterReducer);
  const { items, status } = useAppSelector((state) => state.DishesReducer);
  const dishes = items.map((obj: any) => <Card key={obj.id} {...obj} />);
  const lazySkeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  const category = categoryID;
  const ChangeCategory = React.useCallback((numberCategory: number) => {
    dispatch(setCategory(numberCategory));
  }, []);
  const getItems = async () => {
    const search = value > 0 ? '' : `&search=${value}`;
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
      <div className="header__inner">
        <div className="scroll">
          {status === 'error' ? (
            <div>Ошибка</div>
          ) : (
            <div className="wrapper">{status === 'loading' ? lazySkeleton : dishes}</div>
          )}
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Home;
