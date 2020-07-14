import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        />

        <link rel="stylesheet" href="./Navbar.css" />
      </head>

      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar5"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">
              <img
                style={{ width: "50px" }}
                src="./Images/GiorgioLogo.png"
                alt=""
              ></img>
            </a>
          </div>
          <div id="navbar5" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a
                  href=""
                  onClick={() => {
                    window.location = "mailto:giorgioatanasov34@yahoo.com";
                  }}
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a href="/Resume/GiorgioAtanasovResume.pdf">RESUME</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

/* const NavBar = () => {
  return (
    <nav>
      <div class="logo">
        <h4>
          <img src="./Images/GiorgioLogo.png" class="giorgioLogo" alt=""></img>
        </h4>
      </div>
      <ul class="nav_links">
        <li>
          {" "}
          <a href="">Home</a>
        </li>
        <li
          onClick={() => {
            window.location = "mailto:giorgioatanasov34@yahoo.com";
          }}
        >
          <a href="">Contact</a>
        </li>
        <li>
          <a href="./Resume/GiorgioAtanasovResume.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
}; */
