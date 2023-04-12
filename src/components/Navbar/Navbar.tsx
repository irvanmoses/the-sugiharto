/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, useLocation } from 'react-router-dom';

import logo from '@/assets/logo.png';

import styles from './Navbar.module.scss';

const links = ['Overview', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const pathname = useLocation().pathname;
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
          <nav className={cn(styles.nav, { [styles.active]: isOpen })}>
            <div className={styles.nav__top}>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="logo" />
              </Link>
              <button className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
                <CgMenuGridR />
              </button>
            </div>
            <ul className={styles.nav__content}>
              <div className={styles.links__wrapper}>
                {links.map((link) => {
                  return (
                    <li key={link}>
                      <Link
                        to={`/${link.toLowerCase()}`}
                        className={cn(styles.link, {
                          [styles.active]: pathname === `/${link.toLowerCase()}`,
                        })}
                        onClick={() => setIsOpen(false)}
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </div>

              <div className={styles.button__wrapper}>
                <Link to="/" className={styles.button}>
                  Punya Project?
                </Link>
              </div>
            </ul>
          </nav>
        </OutsideClickHandler>
      )}
    </>
  );
};

export default Navbar;
