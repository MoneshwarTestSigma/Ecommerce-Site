
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home-page';
import LoginPage from './pages/login-page';
import Signup from './pages/signup-page';
import AddProduct from './pages/product-upload-page';
import SignupAdmin from './pages/signup-admin-page';
import Delivery from './pages/delivery-page';
import Cart from './pages/cart-page';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signup-admin" element={<SignupAdmin/>}/>
    <Route path="/product-upload" element={<AddProduct/>}/>
    <Route path="/delivery" element={<Delivery/>}/>
    <Route path="/cart" element={<Cart/>}/>
    
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
