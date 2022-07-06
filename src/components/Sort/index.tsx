import React from 'react';
import styles from './Sort.module.scss';

const Sort: React.FC = () => {
  const sortItem: string[] = ['Set Meal', 'Hot sale', 'Popularity'];
  return (
    <div className={styles.popup}>
      <ul className={styles.list}>
        {sortItem.map((item, i) => (
          <li key={i} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
