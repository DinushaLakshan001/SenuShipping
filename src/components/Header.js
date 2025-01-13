import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">SENU SHIPPING</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/employees">Employee Management</Link>
          </li>
          <li>
            <Link to="/uk-invoices">UK Invoices</Link>
          </li>
          <li>
            <Link to="/sl-invoices">SL Invoices</Link>
          </li>
          <li>
            <Link to="/courier">Courier Management</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
