import React from "react";

function NavBar(props) {
  // console.log(props.userLoggedIn);
  function homeClicked() {
    props.home();
  }
  function search(event) {
    const address = "http://localhost:8000";
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqPayload = {
      subject: data.get("daySearched"),
      class: props.userLoggedIn.class,
    };

    fetch(address + "/subject", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqPayload),
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          props.timetable(data.data);
          document.getElementById("daySearched").value = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <button
          onClick={homeClicked}
          className="navbar-brand home-btn"
          href="/#"
        >
          Timetable Viewer
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button onClick={homeClicked} className="nav-link home-btn">
                Home
              </button>
            </li>
          </ul>
          <button
            onClick={() => props.handleLogout()}
            className="btn  btn-secondary my-2 my-sm-0 mr-3"
            type="submit"
          >
            Hey, {props.userLoggedIn.username}
          </button>

          <form onSubmit={search} className="form-inline mt-2 mt-md-0">
            <input
              name="daySearched"
              id="daySearched"
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn  btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
