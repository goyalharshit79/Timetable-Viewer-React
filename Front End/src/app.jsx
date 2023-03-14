import React, { useState, useEffect } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Home from "./home";

function App() {
  // const [cookieID, setCookieID] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [user, setUser] = useState();
  const [classes, setClasses] = useState();

  useEffect(() => {
    getTimetables();
  }, []);

  function getTimetables() {
    const adress = "http://localhost:8000";
    fetch(adress + "/getTimetable", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data.data);
      });
  }

  //     if (cookie !== ""){
  //     const adress = "http://localhost:8000";

  //     const reqData = {
  //         cookieID: cookieID,
  //     }
  //     fetch( adress + "/retain-session", {
  //         method: "POST",
  //         headers: {"Content-Type": "application/json"},
  //         body: JSON.stringify(reqData),
  //         mode: "cors",
  //     })
  //     .then(res=>res.json())
  //     .then((data)=>{
  //         if(data.msg === "901"){
  //             setIsLoggedIn(true);
  //         }
  //     })
  // }

  function loggedIn(dataRecieved) {
    setIsLoggedIn(true);
    setUser(dataRecieved);
    // setCookieID((prevValue)=> prevValue + cookieIDRecieved);
  }
  function signedUp() {
    setIsRegistered(true);
  }

  return isLoggedIn ? (
    <Home userLoggedIn={user} handleLogout={() => setIsLoggedIn(false)} />
  ) : isRegistered ? (
    <SignIn loggedIn={loggedIn} notRegistered={() => setIsRegistered(false)} />
  ) : (
    <SignUp signedUp={signedUp} classes={classes} />
  );
}

export default App;
