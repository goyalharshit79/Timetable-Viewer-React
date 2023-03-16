import React, { useState, useEffect } from "react";

function Subject(props) {
  const [isData, setIsData] = useState(true);

  function checkData() {
    if (props.timetable.length === 0) {
      setIsData(false);
    } else {
      setIsData(true);
    }
  }
  useEffect(() => {
    checkData();
  });
  return isData ? (
    <div>
      <div className="days-container">
        <div className="row">
          {props.timetable.map((period) => {
            return (
              <div className="col-sm-3 card">
                {period.day}
                <p style={{ fontSize: "20px" }}>
                  Period: {period.periodNumber}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="days-container">
      <div className="row">
        <div className="card col-sm-12">
          <p style={{ fontSize: "40px" }}>Subject Not Found!</p>
          <p style={{ fontSize: "15px" }}>The format of input can look like:</p>
          <p style={{ fontSize: "15px" }}>
            <span className="mr-5">"UGEN-X01"</span> <span>"ugen-X01"</span>
          </p>
          <p style={{ fontSize: "15px" }}>
            <span className="mr-5">"UGEN X01"</span> <span>"ugen X01"</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subject;
