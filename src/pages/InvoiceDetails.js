import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InvoiceDetails = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem('invoices'));
    const invoiceDetails = storedInvoices.find((inv) => inv.id === parseInt(id));
    if (invoiceDetails) {
      setInvoice(invoiceDetails);
    }
  }, [id]);

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Invoice Details</h2>
      <p><strong>Invoice Number:</strong> {invoice.number}</p>
      <p><strong>Reference Number:</strong> {invoice.refNumber}</p>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Due Date:</strong> {invoice.dueDate}</p>
      <p><strong>Customer Name:</strong> {invoice.customerName}</p>
      <p><strong>Customer Address:</strong> {invoice.customerAddress}</p>
      <p><strong>Customer Contact:</strong> {invoice.customerContact}</p>
      <p><strong>Customer Email:</strong> {invoice.customerEmail}</p>
      <p><strong>Subtotal:</strong> {invoice.subTotal}</p>
      <p><strong>Total:</strong> {invoice.total}</p>
    </div>
  );
};

export default InvoiceDetails;
