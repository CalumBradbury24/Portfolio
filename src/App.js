import React, { lazy, Suspense } from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from './Components/spinner/spinner';
//Lazy loading
const ResumePage = lazy(() => import("./Pages/ResumePage/ResumePage"));
const PortfolioPage = lazy(() => import("./Pages/PortfolioPage/PortfolioPage"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/resume" component={ResumePage} />
            <Route exact path="/projects" component={PortfolioPage} />
          </Suspense>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
