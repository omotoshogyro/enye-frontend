import React from "react";
import './Range.css'

function Range({ title, titleLength,totalLength }) {


const rangePercent = Math.floor((titleLength/totalLength)*100)
  return (
    <div className="range">
      <div className="range__details">
        <div className="range__title">{title}</div>
        <div className="range__percentage">{`${rangePercent}%`}</div>
      </div>

      <div className="range__slider__bg">
        <div className="range__slider" style={{width: `${rangePercent}%`}}></div>
      </div>
    </div>
  );
}

export default Range;
