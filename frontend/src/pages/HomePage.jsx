import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to FlashCards</h1>
      <p style={styles.paragraph}>This is the home page of our interactive learning using flash cards for simple and faster learning.</p>
      <div style={styles.buttonContainer}>
        <Link to="/login" style={styles.link}>
          <button style={styles.button}>Login</button>
        </Link>
        <Link to="/signup" style={styles.link}>
          <button style={styles.button}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '36px',
  },
  paragraph: {
    marginBottom: '40px',
    color: '#666',
    fontSize: '18px',
    maxWidth: '600px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default HomePage;
