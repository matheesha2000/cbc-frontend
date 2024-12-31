import { useState } from 'react';
import './App.css';
import LoginPage from './pages/loginPage';
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
  
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
