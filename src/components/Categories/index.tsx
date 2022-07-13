import React from 'react';
import styles from './Categories.module.scss';

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
      <ul className={styles.list}>
        {categoriesItems.map((obj, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categories === index ? styles.active : styles.item}>
            {obj}
          </li>
        ))}
      </ul>

      <div className={styles.block}>
        <h3 className={styles.title}>{categoriesItems[4]}</h3>
      </div>
    </>
  );
};

export default Categories;
