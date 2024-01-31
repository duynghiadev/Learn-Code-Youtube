import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);

React.useEffect(() => {
  const users = localStorage.getItem('userChat')
  if (users) {
    setUser(JSON.parse(users))
  }
  else {
    navigate('/signin')
  }

  }, []);

    return (
        <AuthContext.Provider value={{ user }}>
          {children}
        </AuthContext.Provider>
      );
}