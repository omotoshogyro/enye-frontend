import React from "react";
import Range from "../Range/Range";
import "./RangeView.css";

function RangeView({ details, type }) {

  const checkFunc = (checktype) => {
    const valueArray = [];

    const getValue = (values, name) => {
      values.map((value) => {
        valueArray.push(value[name]);
      });
    };

    getValue(details, checktype);

    const uniqueValueArray = [...new Set(valueArray)];
    const datas = uniqueValueArray.map((uniqueValue) => {
      const filteredValue = details.filter((detail) => detail[checktype] === uniqueValue);
      return { title: uniqueValue, titleLength: filteredValue.length, totalLength: details.length };
    });
    return datas;
  };

  // console.log(checkFunc('CreditCardType'))
  const ranges = checkFunc(type);

  // ranges.map((range) => {
  //   const { length, title } = range;

  //   console.log(length, title);
  // });

  

  return (
    <div className="range__view">
       <div className="range__type">{type}</div>
      {ranges.map((range, index) => {
        const { title, titleLength, totalLength } = range;

        return (
          <Range type={type} title={title} titleLength={titleLength} totalLength={totalLength} key={index}/>
        );
      })}
    </div>
  );
}

export default RangeView;
