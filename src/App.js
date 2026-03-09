import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
//import MainPage from ''
//import CartPage from ''
import LoginPage from './pages/LoginPage/LoginPage'

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

      </Routes>
    </BrowserRouter>   
  );
  }
}

export default App;
