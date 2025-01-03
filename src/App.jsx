import { useState } from 'react';
import './App.css';
import ProductCard from './components/productCard';
import userData from './components/userData';
import LoginPage from './pages/loginPage'
import AdminHomePage from './pages/adminHomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=''>
     <BrowserRouter>
      <Toaster position='top-right'/>
      <Routes>          
         
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/*" element={<AdminHomePage/>}/>
  
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
