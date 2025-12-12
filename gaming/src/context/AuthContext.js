import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    // Initialize token from localStorage
    return localStorage.getItem('token');
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const logout = useCallback(async () => {
    try {
      if (token) {
        await fetch(`${API_BASE_URL}/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
          credentials: 'include'
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear auth state
      localStorage.removeItem('token');
      setToken(null);
      setUser(null);
      navigate('/login');
    }
  }, [token, navigate, API_BASE_URL]); // Add API_BASE_URL as a dependency

  const login = useCallback(async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token and update state
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      await logout(); // Clean up on error
      throw error;
    } finally {
      setLoading(false);
    }
  }, [logout, setToken, setUser, setLoading, API_BASE_URL]); // Add API_BASE_URL as a dependency

  // Auth state persistence on refresh
  useEffect(() => {
    const verifyAuthState = async () => {
      try {
        if (token) {
          // Verify token with backend
          const response = await fetch(`${API_BASE_URL}/user`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
            },
            credentials: 'include'
          });

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            throw new Error('Session expired');
          }
        }
      } catch (error) {
        console.error('Auth verification failed:', error);
        await logout(); // Clean up invalid session
      } finally {
        setLoading(false);
      }
    };

    verifyAuthState();
  }, [token, API_BASE_URL, logout]);

  // Only render children when auth state is determined
  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      loading,
      login, 
      logout,
      isAuthenticated: !!user && !!token
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
