import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import bg_left from '@/assets/bg_left.png';
import flag from '@/assets/flag.png';
import hero_right from '@/assets/hero_right.png';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <img className={styles.bg__left} src={bg_left} alt="" />
        <div className={styles.left__content}>
          <div className={styles.headline}>
            <h1>
              <span>Hi, nama saya</span> Dedik Sugiharto!
            </h1>
            <p>
              Saya seorang software-engineer, pembaca buku, warga NU, dan juga murid
              (online) Pak Fahruddin Faiz.
            </p>
          </div>
          <div className={styles.button__wrapper}>
            <Link to="/overview" className={styles.button}>
              <p>Go To Overview</p>
              <BsArrowRightShort />
            </Link>
          </div>
          <div className={styles.details}>
            <div className={styles.col_1}>
              <p>PROJECTS</p>
              <p>12</p>
            </div>
            <div className={styles.col_2}>
              <p>EXPERIENCE</p>
              <p>8 yrs</p>
            </div>
            <div className={styles.col_3}>
              <p>NATIONALITY</p>
              <p>
                IDN <img src={flag} alt="" style={{ width: 32 }} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.hero__right} src={hero_right} alt="" />
      </div>
    </section>
  );
};

export default Hero;
