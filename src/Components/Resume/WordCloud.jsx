import React from "react";
import ReactWordcloud from "react-wordcloud";
import additionalSkills from "./additionalSkills";
import './WordCloud.styles.scss'

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: false,
  deterministic: false,
  fontFamily: "Open Sans, sans-serif",
  fontSizes: [20, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 5,
  rotations: 0,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

const WordCloud = () => {
    return (
        <div className = 'size'>
          <div className='font' >
            <ReactWordcloud options={options} words={additionalSkills} />
          </div>
        </div>
      );
    
}
  

export default WordCloud;
