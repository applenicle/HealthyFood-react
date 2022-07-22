import React from 'react';
import cog from '../images/Cog.svg';
import { setValue } from '../redux/Filter/slice';
import { useAppDispatch } from '../hooks/redux-hooks';

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

  return (
    <>
      <div className="header__search">
        <div className="header__search-img"></div>
        <input
          ref={ref}
          value={searchValue}
          onChange={onChangeValue}
          type="text"
          placeholder="Search Your Food"
        />
        {searchValue && (
          <img onClick={onClickClear} className="header__clear" src={cog} alt="cog" />
        )}
      </div>
    </>
  );
};

export default Search;
