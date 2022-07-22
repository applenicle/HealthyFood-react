import React from 'react';

const categoriesItems: string[] = [
  '🥘 All Food',
  '🍰 Bakery',
  '🍤 Seafood',
  '🍖 Chicken',
  '🍕 Pizza',
  '🍔 Burger',
];
type CategoriesProps = {
  categories: number;
  onClickCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ categories, onClickCategory }) => {
  return (
    <>
      <ul className="categories__list">
        {categoriesItems.map((obj, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categories === index ? 'categories__item--active' : 'categories__item'}>
            {obj}
          </li>
        ))}
      </ul>

      {/* <div className={styles.block}> */}
      <h3 className="categories__title">Categories</h3>
      {/* </div> */}
    </>
  );
};

export default Categories;
