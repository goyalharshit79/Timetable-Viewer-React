import React from "react";

function Timetable(props) {
  //   console.log(props.timetable);
  return (
    <div>
      <div className="days-container">
        <div className="row">
          {props.timetable.map((period) => {
            return <div className="col-sm-3 card">{period}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Timetable;
