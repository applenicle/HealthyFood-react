import React from 'react';
import styles from './Search.module.scss';
import cog from '../../images/Cog.svg';
import search from '../../images/search.svg';
import { setValue } from '../../redux/Filter/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

const Search: React.FC = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    dispatch(setValue(e.target.value));
  };

  const onClickClear = () => {
    setSearchValue('');
    dispatch(setValue(''));
    ref.current?.focus();
  };
  console.log(searchValue);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <img className={styles.searchImg} src={search} alt="search" />
          <input
            ref={ref}
            value={searchValue}
            onChange={onChangeValue}
            className={styles.input}
            type="text"
            placeholder="Search Your Food"
          />
          {searchValue && <img onClick={onClickClear} className={styles.cog} src={cog} alt="cog" />}
        </div>
      </div>
    </>
  );
};

export default Search;
