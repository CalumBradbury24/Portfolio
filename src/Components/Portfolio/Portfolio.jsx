import React from "react";
import "./Portfolio.styles.scss";
import Ecommerce from "./EcommerceWebApp/ecommerce";
import AirQualityMonitor from "./AirQualityMonitor/AirQualityMonitor";
import Thesis from "./Thesis/Thesis";
import GuitarProject from "./Guitar/Guitar";
import SentryGun from "./SentryGun/SentryGun";

class Portfolio extends React.Component {
  state = {
    option: "All",
  };

  handleClick = (event) => () => {
    this.setState({ option: event });
    console.log(event);
  };

  render() {
    const {option} = this.state;
    return (
      <div className="Portfolio">
        <h2 className="title">My Projects</h2>
        <div className="options">
          <h4 className={"text-size option orange " + (option === 'All' ? 'stayOrange' : 'default')} onClick={this.handleClick("All")}>
            All
          </h4>
          <h4 className={"text-size option blue " + (option === 'WebApp' ? 'stayBlue' : 'default')} onClick={this.handleClick("WebApp")}>
            Web Applications
          </h4>
          <h4 className={"text-size option green " + (option === 'Other' ? 'stayGreen' : 'default')}  onClick={this.handleClick("Other")}>
            Other
          </h4>
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
            <br />
            <br />
            <GuitarProject />
            <br />
            <br />
            <SentryGun />
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
            <br />
            <br />
            <GuitarProject />
            <br />
            <br />
            <SentryGun />
          </div>
        )}
      </div>
    );
  }
}

export default Portfolio;
