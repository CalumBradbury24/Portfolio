import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path = "/" component={HomePage}/>
      </Router>
    </div>
  );
}

export default App;
