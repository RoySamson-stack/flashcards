import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';



const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={styles.profileContainer}>
      <h1>Profile</h1>
      {user ? (
        <div style={styles.profileDetails}>
          <p style={styles.profileDetailsParagraph}>Username: {user.username}</p>
          <p style={styles.profileDetailsParagraph}>Email: {user.email}</p>
          <div style={styles.profileButtons}>
            <Link to="/flashcards" style={styles.link}>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              >
                Flashcards
              </button>
            </Link>
            <Link to="/quizzes" style={styles.link}>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              >
                Quizzes
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};
const styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  profileDetails: {
    marginTop: '20px',
  },
  profileDetailsParagraph: {
    margin: '5px 0',
  },
  profileButtons: {
    marginTop: '20px',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  link: {
    textDecoration: 'none',
  },
};

export default ProfilePage;
