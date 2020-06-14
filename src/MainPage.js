import React, { Component } from "react";
import NavBar from "./Navbar.js";
import { navSlide, openCity } from "./htmlApp.js";
import { Helmet } from "react-helmet";
import { Folder } from "./Folder.js";

const TITLE = "Giorgio Atanasov | Software Engineer";

class MainPage extends Component {
  componentDidMount() {
    navSlide();
    document.getElementById("first").click();
  }

  render() {
    return (
      <html Long="en">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <link rel="stylesheet" href="./style.css"></link>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link rel="icon" href="./Images/GiorgioLogo.png"></link>
        <body>
          <NavBar />

          <div class="OK">
            <h1 class="greating">Hi, my name is</h1>
            <h2 class="name">Giorgio Atanasov</h2>
            <h3 id="glitch" data-text="I build web applications.">
              I build web applications.
            </h3>
            <h3 class="intro">
              I'm a software engineer based in Fremont, CA specializing in
              information systems while creating high-quality applications
              through back-end coding.
            </h3>
            <button
              id="in-touch"
              onClick={() => {
                window.location = "mailto:giorgioatanasov34@yahoo.com";
              }}
            >
              Get In Touch
            </button>
          </div>
          {/* Start of content */}
          <div class="Content">
            <ul class="listStyle">
              <li class="AboutCover">
                <span class="listTitle"> About Me</span>
                <div class="container">
                  <a href="https://github.com/Giorgioatanasov" target="_blank">
                    <figure class="profile">
                      <img src="./Images/GiorgioPhoto.png" />
                    </figure>
                  </a>
                  <h1 class="firstAbout">
                    Hello! I'm Giorgio, a software engineer based in Fremont, CA
                    who loves to build applications that live on the internet. I
                    create applications through the use of back-end coding to
                    provide intuitive and effortless user interfaces with
                    efficient run-times.
                  </h1>
                  <h2 class="secondAbout">
                    I am currently going into my fourth year as a computer
                    science major at the{" "}
                    <span class="highlight">
                      {" "}
                      University of California, Irvine.{" "}
                    </span>{" "}
                    I was apart of the engineering team at{" "}
                    <span class="highlight">Prifina</span> where I worked on
                    back-end applications that deal with AWS Serverless as well
                    as a variety of interesting and meaningful projects on a
                    daily.
                  </h2>
                </div>
              </li>
              <li class="workExperience" id="noBottomMargin">
                <span class="listTitle"> Where I've Worked</span>
              </li>
            </ul>
            <div class="wrapper">
              <div class="tab">
                <button
                  class="tablinks"
                  id="first"
                  onClick={(e) => {
                    openCity(e, "Prifina");
                  }}
                >
                  Prifina
                </button>
                <button
                  class="tablinks"
                  onClick={(e) => {
                    openCity(e, "CoderSchool");
                  }}
                >
                  CoderSchool
                </button>
                <button
                  class="tablinks"
                  onClick={(e) => {
                    openCity(e, "ICS Student Council");
                  }}
                >
                  ICS Student Council
                </button>
              </div>
              <div id="Prifina" class="tabcontent">
                <h3 class="jobTitle">
                  Software Engineer Intern{" "}
                  <span class="highlight">@ Prifina</span>
                </h3>
                <h4 class="dates">Jun. 2019 - Sept. 2019</h4>
                <ul>
                  <li>
                    Worked with AWS Serverless services such as API Gateway,
                    Lambda, S3 to implement functions where users could file
                    share through use of NodeJS.
                  </li>
                  <li>
                    Documented how and why API functions and Lambda functions
                    are done in AWS Serverless architecture environment,
                    utilizing general practices logic of serverless .com
                    framework.
                  </li>
                </ul>
              </div>
              <div id="CoderSchool" class="tabcontent">
                <h3 class="jobTitle">Software Engineer Instructor</h3>
                <h4 class="dates">Jun. 2019 - Sept. 2019</h4>
                <ul>
                  <li>
                    Held Python, Javascript, and HTML workshops for kids from
                    ages 8 to 16. Integrated programming platforms such as
                    Scratch, Repl, and Pygame.
                  </li>
                  <li>
                    Helped increase students’ development skills such as
                    teamwork, creativity, and presentation skills.
                  </li>
                </ul>
              </div>
              <div id="ICS Student Council" class="tabcontent">
                <h3 class="jobTitle">Executive Board of Corporate Outreach</h3>
                <h4 class="dates">Jan. 2019 - Present</h4>
                <ul>
                  <li>
                    Improved student life at the Donald Bren School of
                    Information and Computer Science academically,
                    professionally, and socially by collaborating with large
                    technology companies to host information workshops and
                    sessions.
                  </li>
                  <li>
                    Promoted important events through different social media
                    platforms and presentations.
                  </li>
                </ul>
              </div>
            </div>

            <ol start="3" class="projects">
              <li>
                <span class="listTitle"> UCI SubLeasing Project</span>
                <div class="projInfo">
                  <img class="projImage" src="./Images/OnTheHouse.png"></img>
                  <div>
                    <h1 class="featureProj">Featured Project</h1>
                    <h2 class="projName">UCI Housing</h2>
                    <p class="projDescription">
                      Implemented a website that allows University of
                      California, Irvine students to post their subleasing
                      properties.
                    </p>
                    <pre>
                      <p class="projComponents">
                        {" "}
                        ReactJS {"    "} Javascript{"    "} Custom API
                      </p>
                    </pre>
                  </div>
                  <div></div>
                </div>
                <div class="projIcons">
                  <a
                    href="https://github.com/onthehouse117/On-The-House-Front-End"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-github" id="specificIcons"></i>
                  </a>
                  <a
                    href="https://onthehouse-190cb.firebaseapp.com/"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-external-link" id="specificIcons"></i>
                  </a>
                </div>
                <div></div>
              </li>
              <li>
                <span class="listTitle"> Featured Project</span>
                <div class="projInfo">
                  <img
                    class="projImage"
                    src="./Images/ToolsforSpotify.png"
                  ></img>
                  <div>
                    <h1 class="featureProj">Featured Project</h1>
                    <h2 class="projName">Spotify App</h2>
                    <p class="projDescription">
                      Added functionality to be able to delete multiple songs
                      from a Spotfiy playlist at once. Includes a sleek playlist
                      table to display all songs in selected playlist.
                    </p>
                    <pre>
                      <p class="projComponents">
                        {" "}
                        React {"    "} Node.js {"    "} Spotify Web API
                      </p>
                    </pre>
                  </div>
                  <div></div>
                </div>
                <div class="projIcons">
                  <a
                    href="https://github.com/Giorgioatanasov/ToolsforSpotify"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-github" id="specificIcons"></i>
                  </a>
                  <a
                    href="https://toolsforspotify.netlify.com/"
                    target="_blank"
                  >
                    {" "}
                    <i class="fa fa-external-link" id="specificIcons"></i>
                  </a>
                </div>
                <div></div>
              </li>
            </ol>
          </div>

          <ol start="5" class="projects">
            <li>
              <span class="listTitle">Other Projects</span>
            </li>
          </ol>
          <section id="pattern" class="pattern">
            <ul class="grid">
              <Folder
                {...{
                  title: "Personal Website V1",
                  link: "https://github.com/Giorgioatanasov/ToolsforSpotify",
                  description:
                    "First version of personal website built with Javascript, html, and css and hosted on Github.",
                  resources: "HTML    Javascript",
                }}
              ></Folder>
              <Folder
                {...{
                  title: "Covid-19 Prediction",
                  link:
                    "https://github.com/giorgioatanasov/Covid-19-Visual-Analysis-and-Prediction",
                  description:
                    "Data visualizations of Covid-19 cases in US. Baseline Prophet model and adapted neural network model used to predict future Covid-19 cases.",
                  resources: "Google Colab    Machine Learning",
                }}
              ></Folder>

              <Folder
                {...{
                  title: "UCI Subleasing Backend",
                  link: "https://github.com/onthehouse117/On-The-House-API",
                  description:
                    "Website that allows University of California, Irvine students to post their subleasing properties.",
                  resources: "Javascript     MongoDB",
                }}
              ></Folder>

              <Folder
                {...{
                  title: "Hospital Readmission",
                  link:
                    "https://github.com/giorgioatanasov/Hospital-Readmission",
                  description:
                    "Analysis of hospital readmission rates for diabetic patients. Four machine learning models were used in order to most accurately predict if a patient with diabetes will be readmitted to the hospital within 30 days. ",
                  resources: "Google Colab    Machine Learning",
                }}
              ></Folder>
            </ul>
          </section>
          <div class="containerTouch" id="specificID">
            <i class="fas fa-external-link-alt"></i>
            <ol start="6" class="getInTouch">
              <li>What's Next?</li>
            </ol>
            <h1 class="touchHeader">Get In Touch</h1>
            <h2 class="touchInfo">
              I am currently looking for future job opportunities. My inbox is
              always open as I am very responsive. I look forward to hearing
              from you!
            </h2>
            <button
              id="in-touch2"
              onClick={() => {
                window.location = "mailto:giorgioatanasov34@yahoo.com";
              }}
            >
              Say Hello!
            </button>
          </div>
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
              class="tester"
              onClick={() => {
                window.location = "mailto:giorgioatanasov34@yahoo.com";
              }}
            >
              giorgioatanasov34@yahoo.com
            </h1>
            <div class="v2"></div>
          </footer>
        </body>
      </html>
    );
  }
}

export default MainPage;
