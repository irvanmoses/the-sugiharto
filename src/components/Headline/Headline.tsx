import React from 'react';

import styles from './Headline.module.scss';

type Props = {
  title: string;
  p: string;
};

const Headline = ({ title, p }: Props) => {
  return (
    <div className={styles.page__headline}>
      <div className={styles.title__wrapper}>
        <div className={styles.title_front}>{title}</div>
        <div className={styles.title_back}>{title}</div>
      </div>
      <div className={styles.p__wrapper}>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default Headline;
