import React, { Component } from "react";
import $ from "jquery";
import { NotFoundScript, errMsg, resetForm } from "./NotFoundScript.js";

class NotFound extends Component {
  componentDidMount() {
    NotFoundScript();
    errMsg();
    resetForm(1);
  }

  render() {
    return (
      <html lang="en">
        <meta charset="UTF-8"></meta>
        <link rel="stylesheet" href="./NotFound.css"></link>
        <body>
          <div class="container">
            <form class="four-oh-four-form">
              <input type="text" class="404-input"></input>
            </form>
            <div class="terminal">
              {/* <p
                class="prompt"
                id="glitch"
                data-text="> 404 The Page Was Not Found"
              >
                > 404 The Page Was Not Found
              </p> */}
              <p class="prompt output new-output"></p>
            </div>{" "}
          </div>
        </body>
      </html>
    );
  }
}

export default NotFound;
