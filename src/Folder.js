import React from "react";

const Folder = ({ link, title, description, resources }) => (
  <li>
    <div>
      <img class="folder" draggable="false" src="./Images/folder.png" />
      <a href={link} class="tableGithub" target="_blank">
        <i class="fa fa-github" id="githubCss"></i>
      </a>
      <p1 class="info">{title}</p1>
      <p2 class="description">{description}</p2>
      <pre>
        <p3 class="components">{resources}</p3>
      </pre>
    </div>
  </li>
);

export { Folder };
