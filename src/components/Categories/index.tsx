import React from 'react';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  const categoriesItems: string[] = [
    '🥘 All Food',
    '🍰 Bakery',
    '🍤 Seafood',
    '🍖 Chicken',
    '🍕 Pizza',
    '🍔 Burger',
  ];
  // const [categories, setCategories] = React.useState({ categoriesItems });
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.active}>🥘 All Food</li>

        {categoriesItems.map((items, i) => (
          <li className={styles.item} key={i}>
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
