import React, { useState } from "react";
import Days from "./days";
import NavBar from "./navbar";
import Timetable from "./timetable";

function Home(props){
    const [isTimetable, setIsTimetable] = useState(false);
    const [timetable, setTimetable] = useState();

    function goHome(){
        setIsTimetable(false);
    }
    function showTimetable(timetableRecieved){
        setTimetable(timetableRecieved)
        setIsTimetable(true)
    }
    return (

        isTimetable ? 
        ( 
            <div>
                <NavBar 
                home={goHome} 
                userLoggedIn={props.userLoggedIn} 
                handleLogout={()=>props.handleLogout()}
                timetable={showTimetable}/>
                <Timetable timetable={timetable}/> 
            </div>
        ): 
        (
            <div>
                <NavBar 
                home={goHome} 
                userLoggedIn={props.userLoggedIn} 
                handleLogout={()=>props.handleLogout()}
                timetable={showTimetable}/>
                <Days 
                userLoggedIn = {props.userLoggedIn}
                timetable={showTimetable}/>

            </div>
        )
    )
}

export default Home;