import React, { useState } from 'react';
import InvoiceForm from '../components/InvoiceForm';

const AddInvoicePage = () => {
  const [invoice, setInvoice] = useState({
    number: '',
    date: '',
    customerName: '',
    customerAddress: '',
    subTotal: 0,
    total: 0,
  });

  const handleChange = (field, value) => {
    setInvoice((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddInvoice = (e) => {
    e.preventDefault();
    const newInvoice = { ...invoice, id: Date.now() };
    const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    storedInvoices.push(newInvoice);
    localStorage.setItem('invoices', JSON.stringify(storedInvoices));
  };

  return (
    <div>
      <InvoiceForm invoice={invoice} onChange={handleChange} onSubmit={handleAddInvoice} />
    </div>
  );
};

export default AddInvoicePage;
