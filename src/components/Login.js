import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Ensure this path is correct
import logo from '../assets/senu-shipping-logo.png'; // Ensure this path is correct
import airCargo from '../assets/air-cargo.jpg'; // Ensure this path is correct
import seaCargo from '../assets/sea-cargo.jpg'; // Ensure this path is correct

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication logic (replace with actual logic if necessary)
    if (username === 'admin' && password === '1234') {
      navigate('/employees'); // Redirect to Employee Management page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <div className={styles.cargoImages}>
          <img src={airCargo} alt="Air Cargo" className={styles.cargoImage} />
          <img src={seaCargo} alt="Sea Cargo" className={styles.cargoImage} />
        </div>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password" // Missing closing quote (") added
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
