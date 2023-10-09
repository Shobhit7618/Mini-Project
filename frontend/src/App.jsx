import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Shopslist from './components/Shopslist';
import Itemslist from './components/Itemslist';
import CartPage from './components/CartPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Shopslist/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/shopslist' element={<Shopslist/>} />
        <Route path='/itemslist/:shopname' element={<Itemslist/>} />
        <Route path='/cartpage' element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
