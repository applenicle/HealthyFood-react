import React from 'react';
import { Card, Categories, Search, Skeleton } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { clearFav } from '../redux/Favourite/slice';
import { setCategory } from '../redux/Filter/slice';
import bin from '../images/bin.svg';

const Favourite: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.DishesReducer);
  const { categoryID } = useAppSelector((state: any) => state.FilterReducer);
  const { items } = useAppSelector((state) => state.FavouriteReducer);
  const dishes = items?.map((obj) => <Card key={obj.id} {...obj} />);
  const lazySkeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  const category = categoryID;
  const ChangeCategory = React.useCallback((numberCategory: number) => {
    dispatch(setCategory(numberCategory));
  }, []);

  return (
    <div className="fav">
      <div className="fav__title">
        <h2>Favorite</h2>
        <img onClick={() => dispatch(clearFav())} src={bin} alt="bin" />
      </div>
      <div>
        <Search placeholder={'Search Favorite Food'} />
      </div>
      <div>
        <Categories categories={category} onClickCategory={ChangeCategory} />
      </div>
      <h3 className="categories__title">Favorite</h3>
      <div className="scroll">
        {status === 'error' ? (
          <div>Ошибка</div>
        ) : (
          <div className="wrapper">{status === 'loading' ? lazySkeleton : dishes}</div>
        )}
      </div>
    </div>
  );
};

export default Favourite;
