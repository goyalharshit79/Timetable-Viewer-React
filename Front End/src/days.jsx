import React from "react";

function Days(props) {
  function handleClick(day) {
    const address = "http://localhost:8000";
    const reqPayload = {
      day: day,
      class: props.userLoggedIn.class,
    };

    fetch(address + "/timetable", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqPayload),
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          props.timetable(data.timetable);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div>
      <div className="days-container">
        <div className="row">
          {days.map((day) => {
            return (
              <div className="col-sm-3 card">
                <span
                  className="day"
                  onClick={() => {
                    handleClick(day);
                  }}
                >
                  {day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Days;
