import React from 'react';

// Example for Header component

const Header = () => (
    <header className="header">
      <h1>Company Management System</h1>
      <nav>
        <a href="/employees">Employees</a>
        <a href="/uk-invoices">UK Invoices</a>
        <a href="/sl-invoices">SL Invoices</a>
        <a href="/courier">Courier</a>
      </nav>
    </header>
  );
  
  export default Header;
  