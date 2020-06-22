import React from "react";
import "./Portfolio.styles.scss";
import Ecommerce from "./EcommerceWebApp/ecommerce";
import AirQualityMonitor from "./AirQualityMonitor/AirQualityMonitor";
import Thesis from "./Thesis/Thesis";

class Portfolio extends React.Component {
  state = {
    option: "All",
  };

  handleClick = (event) => () => {
    this.setState({ option: event });
    console.log(event);
  };

  render() {
    return (
      <div className="Portfolio">
        <h2 className='title'>My Projects</h2>
        <div className = 'options'>
          <h4 className='option' onClick={this.handleClick("All")}>All</h4>
          <h4 className='option' onClick={this.handleClick("WebApp")}>Web Applications</h4>
          <h4 className='option' onClick={this.handleClick("Other")}>Other</h4>
        </div>
        {this.state.option === "All" ? (
          <div>
            <Ecommerce />
            <br />
            <br />
            <AirQualityMonitor />
            <br />
            <br />
            <Thesis />
          </div>
        ) : this.state.option === "WebApp" ? (
          <div>
            <Ecommerce />
            <br />
            <br />
            <AirQualityMonitor />
          </div>
        ) : (
          <div>
            <Thesis />
          </div>
        )}
      </div>
    );
  }
}

export default Portfolio;
