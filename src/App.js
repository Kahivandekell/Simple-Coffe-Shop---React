import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
import SearchBar from './Components/SortSelect/SortSelect';
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage';


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
      <MainPage/>
      <Routes>
      </Routes>
    </BrowserRouter>   
  );
  }
}

export default App;
