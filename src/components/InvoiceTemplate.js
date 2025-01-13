import React from 'react';

const InvoiceTemplate = ({ invoice }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #000', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Invoice</h2>
      <p><strong>Invoice Number:</strong> {invoice.number}</p>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Customer Name:</strong> {invoice.customerName}</p>
      <p><strong>Customer Address:</strong> {invoice.customerAddress}</p>
      <p><strong>Subtotal:</strong> {invoice.subTotal}</p>
      <p><strong>Total Amount:</strong> {invoice.total}</p>
    </div>
  );
};

export default InvoiceTemplate;
