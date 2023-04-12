import React from 'react';

import photo from '@/assets/photo.png';
import { Headline, List } from '@/components';
import { education, work } from '@/mocks';
import styles from '@/styles/page/overview.module.scss';

const paragraph =
  'Nama saya Dedik Sugiharto, saya seorang software-engineer sebelum kata software-engineer itu ada. Saya terbiasa ngoding di Microsoft Word 2003.';

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.left}>
        <Headline title="Overview" p={paragraph} />
        <List title="Education" item={education} />
        <List title="Work Experience" item={work} />
      </div>
      <div className={styles.right}>
        <img src={photo} alt="foto" />
        <p>Foto diambil 2018</p>
      </div>
    </div>
  );
};

export default Overview;
