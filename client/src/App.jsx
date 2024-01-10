import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import { CustomerProvider } from './providers/CustomerProvider';

function App() {

  return (
    <CustomerProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  )
}

export default App
