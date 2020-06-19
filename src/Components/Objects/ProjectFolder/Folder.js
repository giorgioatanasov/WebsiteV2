import React from "react";
import "./Folder.css";
const Folder = ({ link, title, description, resources }) => (
  <li>
    <div class="folderContainer">
      <img class="folder" draggable="false" src="./Images/folder.png" />
      <a href={link} class="tableGithub" target="_blank">
        <i class="fa fa-github" id="githubCss"></i>
      </a>
      <h1 class="info">{title}</h1>
      <h2 class="description">{description}</h2>
      <h3 class="components">{resources}</h3>
    </div>
  </li>
);

export { Folder };
