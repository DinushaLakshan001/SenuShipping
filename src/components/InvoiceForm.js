import React from 'react';

const InvoiceForm = ({ invoice, onChange, onSubmit }) => {
  return (
    <div>
      <h2>{invoice.id ? 'Edit Invoice' : 'Add Invoice'}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Invoice Number"
          value={invoice.number}
          onChange={(e) => onChange('number', e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          value={invoice.date}
          onChange={(e) => onChange('date', e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={invoice.customerName}
          onChange={(e) => onChange('customerName', e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer Address"
          value={invoice.customerAddress}
          onChange={(e) => onChange('customerAddress', e.target.value)}
        />
        <input
          type="number"
          placeholder="Subtotal"
          value={invoice.subTotal}
          onChange={(e) => onChange('subTotal', e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Amount"
          value={invoice.total}
          onChange={(e) => onChange('total', e.target.value)}
        />
        <button type="submit">{invoice.id ? 'Update Invoice' : 'Add Invoice'}</button>
      </form>
    </div>
  );
};

export default InvoiceForm;
