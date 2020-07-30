import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from "./Components/NavBar/NavBar";
import SplashScreen from './Components/SplashScreen/SplashScreen';
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SplashScreen />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
