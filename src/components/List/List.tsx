import React from 'react';

import styles from './List.module.scss';

type Props = {
  title: string;
  item: string[];
};

const List = ({ title, item }: Props) => {
  return (
    <div className={styles.list__wrapper}>
      <div className={styles.list__title}>{title}</div>
      <ul className={styles.list__items}>
        {item.map((item, index) => (
          <li key={index} className={styles.list__item}>
            <div className={styles.list__bullet} />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
