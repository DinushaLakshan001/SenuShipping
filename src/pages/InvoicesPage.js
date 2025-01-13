import React, { useState, useEffect } from 'react';
import InvoiceList from '../components/InvoiceList';

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    setInvoices(storedInvoices);
  }, []);

  const handleDeleteInvoice = (id) => {
    const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
    setInvoices(updatedInvoices);
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
  };

  return (
    <div>
      <h1>All Invoices</h1>
      <InvoiceList invoices={invoices} onDelete={handleDeleteInvoice} />
    </div>
  );
};

export default InvoicesPage;
