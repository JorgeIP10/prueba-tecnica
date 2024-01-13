import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';

function LogoutPage() {
  const {logout} = useAuth();
  useEffect(() => {
    const asyncLogout = async () => {
      await logout();
    }
    asyncLogout();
  }, [logout])

  return (
    <Navigate to={'/'}/>
  )
}

export default LogoutPage;