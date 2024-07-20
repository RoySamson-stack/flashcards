import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import QuizComponent from './components/QuizComponent';
import FlashcardComponent from './components/FlashcardComponent';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import ProfilePage from './pages/ProfilePage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AuthContext);
    return user ? <Component {...rest} /> : <Navigate to="/login" />;
  };
  
  const App = () => {
    return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/quizzes"
              // element={<ProtectedRoute component={QuizComponent} />}
               element = {<QuizComponent />}
            />
            <Route
              path="/flashcards"
              element={<ProtectedRoute component={FlashcardComponent} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute component={ProfilePage} />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    );
  };
  
  export default App;
