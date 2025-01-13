import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditInvoicePage = () => {
  const { id } = useParams(); // Get the invoice ID from the URL
  const [invoice, setInvoice] = useState({
    number: '',
    refNumber: '',
    date: '',
    dueDate: '',
    customerName: '',
    customerAddress: '',
    customerContact: '',
    customerEmail: '',
    subTotal: 0,
    total: 0
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch invoice details by ID (replace with your data fetching logic)
    const storedInvoices = JSON.parse(localStorage.getItem('invoices'));
    const invoiceData = storedInvoices ? storedInvoices.find((inv) => inv.id === parseInt(id)) : null;
    if (invoiceData) {
      setInvoice(invoiceData);
    } else {
      navigate('/uk-invoices'); // If the invoice isn't found, redirect to the invoices page
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [name]: value
    }));
  };

  const handleSave = () => {
    const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    const updatedInvoices = storedInvoices.map((inv) =>
      inv.id === parseInt(id) ? { ...inv, ...invoice } : inv
    );
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
    navigate('/uk-invoices'); // Redirect back to the invoice list page after saving
  };

  return (
    <div>
      <h2>Edit Invoice</h2>
      <form>
        <div>
          <label>Invoice Number</label>
          <input
            type="text"
            name="number"
            value={invoice.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Reference Number</label>
          <input
            type="text"
            name="refNumber"
            value={invoice.refNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={invoice.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={invoice.dueDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={invoice.customerName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Address</label>
          <input
            type="text"
            name="customerAddress"
            value={invoice.customerAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Contact</label>
          <input
            type="text"
            name="customerContact"
            value={invoice.customerContact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Email</label>
          <input
            type="email"
            name="customerEmail"
            value={invoice.customerEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subtotal</label>
          <input
            type="number"
            name="subTotal"
            value={invoice.subTotal}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Total</label>
          <input
            type="number"
            name="total"
            value={invoice.total}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInvoicePage;
