// src/components/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { user, token, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && (!token || !user)) {
      // Store the attempted URL for redirect after login
      const redirectPath = location.pathname !== '/login' 
        ? `?redirect=${encodeURIComponent(location.pathname)}` 
        : '';
      navigate(`/login${redirectPath}`, { replace: true });
    }
  }, [user, token, loading, navigate, location]);

  if (loading) {
    return <div className="d-flex justify-content-center my-5">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
  }

  return token && user ? children : null;
}