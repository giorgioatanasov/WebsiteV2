import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="left-footer">
        <ul class="social-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/giorgio-atanasov-696a8213a/"
              target="_blank"
              class="social-icon"
            >
              {" "}
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Giorgioatanasov"
              target="_blank"
              class="social-icon"
            >
              {" "}
              <i class="fa fa-github"></i>
            </a>
          </li>
        </ul>
        <div class="vl"></div>
      </footer>
      <footer class="right-footer">
        <h1
          class="rightFooter"
          onClick={() => {
            window.location = "mailto:giorgioatanasov34@yahoo.com";
          }}
        >
          giorgioatanasov34@yahoo.com
        </h1>
        <div class="v2"></div>
      </footer>
    </>
  );
};

export default Footer;
