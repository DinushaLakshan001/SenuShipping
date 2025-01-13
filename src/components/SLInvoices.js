import React, { useState } from 'react';
import styles from './SLInvoices.module.css';

const SLInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({ number: '', date: '', amount: '' });

  const handleAddInvoice = () => {
    setInvoices([...invoices, { id: invoices.length + 1, ...newInvoice }]);
    setNewInvoice({ number: '', date: '', amount: '' });
  };

  const handleDeleteInvoice = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  return (
    <div className={styles.invoiceContainer}>
      <h2>SL Invoices</h2>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Invoice Number"
          value={newInvoice.number}
          onChange={(e) => setNewInvoice({ ...newInvoice, number: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={newInvoice.date}
          onChange={(e) => setNewInvoice({ ...newInvoice, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newInvoice.amount}
          onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
        />
        <button onClick={handleAddInvoice} className={styles.button}>Add Invoice</button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Invoice Number</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.number}</td>
                <td>{invoice.date}</td>
                <td>{invoice.amount}</td>
                <td>
                  <button onClick={() => handleDeleteInvoice(invoice.id)} className={styles.button}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SLInvoices;
