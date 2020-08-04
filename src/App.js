import React from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ResumePage from './Pages/ResumePage/ResumePage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/projects" component={PortfolioPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
