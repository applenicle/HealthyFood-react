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

const Categories: React.FC = () => {
  const [categories, setCategories] = React.useState(0);
  return (
    <>
      <ul className={styles.list}>
        {categoriesItems.map((items: string, i: number) => (
          <li
            onClick={() => setCategories(i)}
            className={categories === i ? styles.active : styles.item}
            key={i}>
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
