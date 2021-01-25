import React, { useState, useEffect } from "react";
import "./Pagination.css";

function Pagination({ details, showFunction, monitor }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalProfile = details.length;
  const perPage = 20;
  const numberOfPaginations = Math.ceil(totalProfile / perPage);
  const startingPoint = (currentPage - 1) * perPage;
  const shownDetails = details.slice(startingPoint, startingPoint + perPage);

  useEffect(() => {
    showFunction(shownDetails);
    // console.log(monitor)
  }, [currentPage, monitor]);

  const setCurrent = (index) => {
    setCurrentPage(index + 1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const nextFunc = () => {
    setCurrentPage(prevState => prevState + 1)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const prevFunc = () => {
    setCurrentPage(prevState => prevState - 1)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  };
  return (
    <div className="pagination__container">
        
      <button className="prev__btn" onClick={currentPage > 1 ? prevFunc : ''}>Previous</button>

        <div className="pagination">
            {Array(numberOfPaginations)
            .fill(1)
            .map((item, i) => {
                if (i < 10) {
                return (
                    
                    <div
                    className={`each__btn ${
                        currentPage === i + 1 ? "pagination__bg" : ""
                    }`}
                    onClick={() =>setCurrent(i)}
                    key={i}
                    >
                    {i + 1}
                    </div>
                );
                }
            })}
        </div>
        <button className="next__btn" onClick={currentPage < numberOfPaginations ? nextFunc : ''}>Next</button>
    </div>
  );
}

export default Pagination;
