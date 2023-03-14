import React from "react";
import uniqid from "uniqid";

function SignIn(props) {
  function invalidLogIn() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
  function handleSignIn(event) {
    const adress = "http://localhost:8000";
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqData = {
      username: data.get("username"),
      password: data.get("password"),
      cookieID: uniqid(),
    };
    fetch(adress + "/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqData),
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === "900") {
          props.loggedIn(data.userData);
        } else {
          alert("Log In failed");
          invalidLogIn();
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }

  return (
    <div>
      <h1 id="login"> Log In</h1>
      <div className="container-fluid login">
        <div className="row">
          <div className="col-6 left-side">
            <h2>Timetable Viewer</h2>
          </div>

          <div className="col-6 right-side">
            <form onSubmit={handleSignIn} method="post">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="form-control btn btn-secondary"
                >
                  Submit
                </button>
              </div>
              <div className="form-group">
                <a
                  href="/#"
                  className="form-control btn btn-secondary"
                  onClick={props.notRegistered}
                >
                  New User
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
