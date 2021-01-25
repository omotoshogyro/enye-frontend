import React, { useState, useEffect } from "react";
import "./Details.css";
import Detail from "../Detail/Detail";

function Details({ details, input, select }) {


  
  return (
    <div className="details" id='top'>
      {details
        .filter((detail) => {
          return (
            detail.FirstName.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
            detail.LastName.toLowerCase().indexOf(input.toLowerCase()) >= 0
          );
        })
        .filter((detail) => {
          return select === ""
            ? detail.Gender.toLowerCase().includes(select.toLowerCase())
            : detail.Gender.toLowerCase() === select.toLowerCase()
        })
        .map((detail) => {
          return  (
            <Detail detail={detail} key={detail.UserName} />
          ) 
        })}
    </div>
  );
}

export default Details;
