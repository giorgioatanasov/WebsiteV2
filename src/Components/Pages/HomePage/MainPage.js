import React, { Component } from "react";
import { Folder } from "../../Objects/ProjectFolder/Folder.js";
import Button from "../../Objects/Button/Button.js";
import Table from "../../Objects/WorkTable/Table/Table.js";
import Footer from "../../Objects/Footer/Footer.js";
import NavBar from "../../Objects/NavBar/Navbar.js";

class MainPage extends Component {
  componentDidMount() {
    document.getElementById("first").click();
  }

  render() {
    return (
      <html Long="en">
        <link rel="stylesheet" href="./style.css"></link>
        <link rel="icon" href="./Images/GiorgioLogo.png"></link>
        <NavBar />
        <body>
          <div class="header">
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
            <Button
              {...{
                text: "Get In Touch",
                id: "in-touch",
                onClick: () =>
                  (window.location = "mailto:giorgioatanasov34@yahoo.com"),
              }}
            ></Button>
          </div>
          {/* Start of content */}
          <div class="Content">
            <ul class="listStyle">
              <li>
                <span class="listTitle"> About Me</span>
                <div class="container">
                  <a href="https://github.com/Giorgioatanasov" target="_blank">
                    <figure class="profile">
                      <img src="./Images/GiorgioPhoto.png" />
                    </figure>
                  </a>
                  <p class="firstAbout">
                    Hello! I'm Giorgio, a software engineer based in Fremont, CA
                    who loves to build applications that live on the internet. I
                    create applications through the use of back-end coding to
                    provide intuitive and effortless user interfaces with
                    efficient run-times. I am currently going into my fourth
                    year as a computer science major at the{" "}
                    <span class="highlight">
                      {" "}
                      University of California, Irvine.{" "}
                    </span>{" "}
                    <br />
                    <br />I was apart of the engineering team at{" "}
                    <span class="highlight">Prifina</span> where I worked on
                    back-end applications that deal with AWS Serverless as well
                    as a variety of interesting and meaningful projects on a
                    daily.
                  </p>
                </div>
              </li>
              <li class="workExperience" id="noBottomMargin">
                <span class="listTitle"> Where I've Worked</span>
              </li>
            </ul>

            <Table />

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
                    <p class="projComponents">
                      ReactJS - Javascript - Custom API
                    </p>
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
                    <p class="projComponents">
                      React - Node.js - Spotify Web API
                    </p>
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
                  resources: "HTML - Javascript",
                }}
              ></Folder>

              <Folder
                {...{
                  title: "Covid-19 Prediction",
                  link:
                    "https://github.com/giorgioatanasov/Covid-19-Visual-Analysis-and-Prediction",
                  description:
                    "Data visualizations of Covid-19 cases in US. Baseline Prophet model and adapted neural network model used to predict future Covid-19 cases.",
                  resources: "Google Colab - Machine Learning",
                }}
              ></Folder>

              <Folder
                {...{
                  title: "UCI Subleasing Backend",
                  link: "https://github.com/onthehouse117/On-The-House-API",
                  description:
                    "Website that allows University of California, Irvine students to post their subleasing properties.",
                  resources: "Javascript - MongoDB",
                }}
              ></Folder>

              <Folder
                {...{
                  title: "Hospital Readmission",
                  link:
                    "https://github.com/giorgioatanasov/Hospital-Readmission",
                  description:
                    "Analysis of hospital readmission rates for diabetic patients. Four machine learning models were used in order to most accurately predict if a patient with diabetes will be readmitted to the hospital within 30 days. ",
                  resources: "Google Colab - Machine Learning",
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
          <Footer />
        </body>
      </html>
    );
  }
}

export default MainPage;
