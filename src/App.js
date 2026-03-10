import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './Components/Navigation/Navigation';
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage';
import CartPage from './pages/CartPage/CartPage';

import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {
  const {isLoggedIn} = useContext(AuthContext)

  if (!isLoggedIn){
    return(
      <LoginPage/>
    )
  }
  else{
  return (
    <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
    </BrowserRouter>   
  );
  }
}

export default App;

/* 
Dodac
<Route path="/" element={<MainPage/>}/>
<Route path="/cart" element={<CartPage/>}/>
*/ 
