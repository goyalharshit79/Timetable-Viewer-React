import React from "react";

function SignUp(props) {
  function invalid() {
    document.getElementById("confirmPassword").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").classList.add("wrong");
    document.getElementById("password").classList.add("wrong");
  }
  function handleSignUp(event) {
    const adress = "http://localhost:8000";
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqData = {
      username: data.get("username"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      class: data.get("classSelected"),
      cookieID: "",
    };
    fetch(adress + "/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqData),
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === "902") {
          invalid();
          alert("Passwords don't match");
        } else if (data.msg === "901") {
          props.signedUp();
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }
  return (
    <div>
      <h1 id="signup">Sign up</h1>

      <div className="container-fluid signup">
        <div className="center-block">
          <form onSubmit={handleSignUp} method="post">
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="class">Class</label>
              <select
                id="class"
                name="classSelected"
                className="form-select form-control"
              >
                <option defaultValue="Class">Class</option>
                {props.classes.map((oneClass) => {
                  return (
                    <option value={oneClass.class}>{oneClass.class}</option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <button type="submit" className="form-control btn btn-secondary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
