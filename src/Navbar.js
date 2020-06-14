import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div class="logo">
          <h4>
            <img
              src="./Images/GiorgioLogo.png"
              class="giorgioLogo"
              alt=""
            ></img>
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
  }
}

export default NavBar;
