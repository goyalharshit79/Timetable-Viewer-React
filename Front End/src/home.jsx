import React, { useState } from "react";
import Days from "./days";
import NavBar from "./navbar";
import Timetable from "./timetable";
import Subject from "./subject";

function Home(props) {
  const [isTimetable, setIsTimetable] = useState(false);
  const [timetable, setTimetable] = useState();
  const [isSubject, setIsSubject] = useState(false);

  function goHome() {
    setIsTimetable(false);
    setIsSubject(false);
  }
  function showTimetable(timetableRecieved) {
    setTimetable(timetableRecieved);
    setIsTimetable(true);
  }
  function showSubjectSchedule(timetableRecieved) {
    setIsSubject(true);
    setTimetable(timetableRecieved);
  }
  return isTimetable ? (
    <div>
      <NavBar
        home={goHome}
        userLoggedIn={props.userLoggedIn}
        handleLogout={() => props.handleLogout()}
        timetable={showSubjectSchedule}
      />
      <Timetable timetable={timetable} />
    </div>
  ) : isSubject ? (
    <div>
      <NavBar
        home={goHome}
        userLoggedIn={props.userLoggedIn}
        handleLogout={() => props.handleLogout()}
        timetable={showSubjectSchedule}
      />
      <Subject timetable={timetable} />
    </div>
  ) : (
    <div>
      <NavBar
        home={goHome}
        userLoggedIn={props.userLoggedIn}
        handleLogout={() => props.handleLogout()}
        timetable={showSubjectSchedule}
      />
      <Days userLoggedIn={props.userLoggedIn} timetable={showTimetable} />
    </div>
  );
}

export default Home;
