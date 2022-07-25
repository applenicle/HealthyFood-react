import React from 'react';
import cog from '../images/Cog.svg';
import { setValue } from '../redux/Filter/slice';
import { useAppDispatch } from '../hooks/redux-hooks';
type SearchProps = {
  placeholder: string;
};

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState('');

  const onClickClear = () => {
    dispatch(setValue(''));
    setSearchValue('');
    ref.current?.focus();
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    dispatch(setValue(e.target.value));
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
          placeholder={placeholder}
        />
        {searchValue && (
          <img onClick={onClickClear} className="header__clear" src={cog} alt="cog" />
        )}
      </div>
    </>
  );
};

export default Search;
