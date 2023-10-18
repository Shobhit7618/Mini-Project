import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Shopslist from './components/Shopslist';
import Itemslist from './components/Itemslist';
import CartPage from './components/CartPage';
import { Home } from './components/Home';
import { CartProvider } from './CartContext';
import { Toaster } from 'react-hot-toast';
import ViewOrders from './components/ViewOrders';

function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/shoplist' element={<Shopslist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/shopslist' element={<Shopslist />} />
          <Route path='/itemslist/:shopname' element={<Itemslist />} />
          <Route path='/cartpage' element={<CartPage />} />
          <Route path='/vieworders' element={<ViewOrders />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
