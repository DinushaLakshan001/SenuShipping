import React, { useState, useEffect } from 'react';
import InvoiceTemplate from './InvoiceTemplate';
import styles from './UKInvoices.module.css';

const UKInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({ number: '', refNumber: '', date: '', dueDate: '', customerName: '', customerAddress: '', customerContact: '', customerEmail: '', items: [], subTotal: 0, total: 0 });
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem('invoices'));
    if (storedInvoices) {
      setInvoices(storedInvoices);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }, [invoices]);

  const handleAddInvoice = () => {
    if (newInvoice.number && newInvoice.date && newInvoice.total) {
      setInvoices([...invoices, { id: invoices.length + 1, ...newInvoice }]);
      setNewInvoice({ number: '', refNumber: '', date: '', dueDate: '', customerName: '', customerAddress: '', customerContact: '', customerEmail: '', items: [], subTotal: 0, total: 0 });
    } else {
      alert("All fields are required!");
    }
  };

  const handleDeleteInvoice = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  const handleEditInvoice = (id) => {
    const invoice = invoices.find(inv => inv.id === id);
    setEditingInvoice(invoice);
    setNewInvoice(invoice);
  };

  const handleUpdateInvoice = () => {
    setInvoices(invoices.map(inv => inv.id === editingInvoice.id ? newInvoice : inv));
    setEditingInvoice(null);
    setNewInvoice({ number: '', refNumber: '', date: '', dueDate: '', customerName: '', customerAddress: '', customerContact: '', customerEmail: '', items: [], subTotal: 0, total: 0 });
  };

  const filteredInvoices = invoices.filter(invoice =>
    invoice.number.includes(searchQuery) || invoice.date.includes(searchQuery)
  );

  return (
    <div className={styles.invoiceContainer}>
      <h2>UK Invoices</h2>
      <input
        type="text"
        placeholder="Search by Number or Date"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchBar}
      />
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Invoice Number"
          value={newInvoice.number}
          onChange={(e) => setNewInvoice({ ...newInvoice, number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Reference Number"
          value={newInvoice.refNumber}
          onChange={(e) => setNewInvoice({ ...newInvoice, refNumber: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={newInvoice.date}
          onChange={(e) => setNewInvoice({ ...newInvoice, date: e.target.value })}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={newInvoice.dueDate}
          onChange={(e) => setNewInvoice({ ...newInvoice, dueDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={newInvoice.customerName}
          onChange={(e) => setNewInvoice({ ...newInvoice, customerName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Customer Address"
          value={newInvoice.customerAddress}
          onChange={(e) => setNewInvoice({ ...newInvoice, customerAddress: e.target.value })}
        />
        <input
          type="text"
          placeholder="Customer Contact"
          value={newInvoice.customerContact}
          onChange={(e) => setNewInvoice({ ...newInvoice, customerContact: e.target.value })}
        />
        <input
          type="email"
          placeholder="Customer Email"
          value={newInvoice.customerEmail}
          onChange={(e) => setNewInvoice({ ...newInvoice, customerEmail: e.target.value })}
        />
        <input
          type="number"
          placeholder="Subtotal"
          value={newInvoice.subTotal}
          onChange={(e) => setNewInvoice({ ...newInvoice, subTotal: parseFloat(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Total Amount"
          value={newInvoice.total}
          onChange={(e) => setNewInvoice({ ...newInvoice, total: parseFloat(e.target.value) })}
        />
        {editingInvoice ? (
          <button onClick={handleUpdateInvoice} className={styles.button}>Update Invoice</button>
        ) : (
          <button onClick={handleAddInvoice} className={styles.button}>Add Invoice</button>
        )}
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
            {filteredInvoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.number}</td>
                <td>{invoice.date}</td>
                <td>{invoice.total}</td>
                <td>
                  <button onClick={() => handleEditInvoice(invoice.id)} className={styles.button}>Edit</button>
                  <button onClick={() => handleDeleteInvoice(invoice.id)} className={styles.button}>Delete</button>
                  <InvoiceTemplate invoice={invoice} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UKInvoices;
