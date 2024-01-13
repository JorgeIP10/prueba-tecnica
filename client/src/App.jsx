import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import { CustomerProvider } from './providers/CustomerProvider';
import { AuthProvider } from './providers/AuthProvider';
import { ProtectedRoute } from './ProtectedRoute';
// import { Navigate } from "react-router-dom";
import LogoutPage from './pages/LogoutPage';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <AuthProvider>
      <CustomerProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route element={<ProtectedRoute />}>
                <Route path='/logout' element={<LogoutPage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
              </Route>
          </Routes>
        </BrowserRouter>
      </CustomerProvider>
    </AuthProvider>
  )
}

export default App
