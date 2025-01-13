import React from 'react';
import { Link } from 'react-router-dom';

const InvoiceList = ({ invoices, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Invoice Number</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.number}</td>
              <td>{invoice.date}</td>
              <td>{invoice.total}</td>
              <td>
                <button onClick={() => onEdit(invoice.id)}>Edit</button>
                <button onClick={() => onDelete(invoice.id)}>Delete</button>
                <Link to={`/invoice/${invoice.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
