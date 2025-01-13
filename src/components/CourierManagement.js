import React, { useState } from 'react';
import styles from './CourierManagement.module.css';

const CourierManagement = () => {
  const [shipments, setShipments] = useState([]);
  const [newShipment, setNewShipment] = useState({ trackingNumber: '', date: '', status: 'Arrived' });
  const [ukInvoices, setUkInvoices] = useState([
    // Sample UK invoices
    { id: 1, number: 'UK001', date: '2025-01-10', amount: '5000' },
    { id: 2, number: 'UK002', date: '2025-01-11', amount: '7500' }
  ]);

  const handleAddShipment = () => {
    setShipments([...shipments, { id: shipments.length + 1, ...newShipment }]);
    setNewShipment({ trackingNumber: '', date: '', status: 'Arrived' });
  };

  const handlePrintSheet = () => {
    window.print();
  };

  return (
    <div className={styles.courierContainer}>
      <h2>Courier Management</h2>

      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Tracking Number"
          value={newShipment.trackingNumber}
          onChange={(e) => setNewShipment({ ...newShipment, trackingNumber: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={newShipment.date}
          onChange={(e) => setNewShipment({ ...newShipment, date: e.target.value })}
        />
        <button onClick={handleAddShipment} className={styles.button}>Add Shipment</button>
      </div>

      <div className={styles.tableContainer}>
        <h3>Arrived Shipments</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tracking Number</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map(shipment => (
              <tr key={shipment.id}>
                <td>{shipment.id}</td>
                <td>{shipment.trackingNumber}</td>
                <td>{shipment.date}</td>
                <td>{shipment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.tableContainer}>
        <h3>UK Invoices</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Invoice Number</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {ukInvoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.number}</td>
                <td>{invoice.date}</td>
                <td>{invoice.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={handlePrintSheet} className={styles.printButton}>Print Sheet</button>
    </div>
  );
};

export default CourierManagement;
