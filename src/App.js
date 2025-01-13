import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import EmployeeManagement from './components/EmployeeManagement';
import UKInvoices from './components/UKInvoices';
import SLInvoices from './components/SLInvoices';
import CourierManagement from './components/CourierManagement';
import Login from './components/Login';
import InvoicesPage from './pages/InvoicesPage';  // Import InvoicesPage
import AddInvoicePage from './pages/AddInvoicePage';  // Import AddInvoicePage
import EditInvoicePage from './pages/EditInvoicePage';  // Import EditInvoicePage
import InvoiceDetails from './pages/InvoiceDetails';  // Import InvoiceDetails
import './App.css';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Header />}
      <main className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees" element={<EmployeeManagement />} />
          <Route path="/uk-invoices" element={<UKInvoices />} />
          <Route path="/sl-invoices" element={<SLInvoices />} />
          <Route path="/courier" element={<CourierManagement />} />
          
          {/* Add routes for invoice management */}
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/add-invoice" element={<AddInvoicePage />} />
          <Route path="/edit-invoice/:id" element={<EditInvoicePage />} />
          <Route path="/invoice/:id" element={<InvoiceDetails />} />
        </Routes>
      </main>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
