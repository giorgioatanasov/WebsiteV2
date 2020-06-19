import React from "react";
import Tab from "../Tab/Tab.js";
import Button from "../../Button/Button.js";
import { openJob } from "../../../Pages/HomePage/JobTabScript.js";

const Table = () => {
  return (
    <div class="wrapper">
      <div class="tab">
        <Button
          {...{
            text: "Prifina",
            class: "tablinks",
            id: "first",
            onClick: (e) => {
              openJob(e, "Prifina");
            },
          }}
        >
          Prifina
        </Button>

        <Button
          {...{
            text: "CoderSchool",
            class: "tablinks",
            onClick: (e) => {
              openJob(e, "CoderSchool");
            },
          }}
        >
          Prifina
        </Button>
        <Button
          {...{
            text: "ICS Student Council",
            class: "tablinks",
            onClick: (e) => {
              openJob(e, "ICS Student Council");
            },
          }}
        ></Button>
      </div>

      <Tab
        {...{
          id: "Prifina",
          jobTitle: "Software Engineer Intern",
          spanClass: "highlight",
          spanText: " @ Prifina",
          duration: "Jun. 2019 - Sept. 2019",
          description1:
            "Worked with AWS Serverless services such as API Gateway, Lambda, S3 to implement functions where users could file share through use of NodeJS.",
          description2:
            "Documented how and why API functions and Lambda functions are done in AWS Serverless architecture environment, utilizing general practices logic of serverless .com framework.",
        }}
      ></Tab>

      <Tab
        {...{
          id: "CoderSchool",
          jobTitle: "Software Engineer Instructor",
          duration: "Jun. 2019 - Sept. 2019",
          description1:
            "Held Python, Javascript, and HTML workshops for kids from ages 8 to 16. Integrated programming platforms such as Scratch, Repl, and Pygame.",
          description2:
            "Helped increase students’ development skills such as teamwork, creativity, and presentation skills.",
        }}
      ></Tab>

      <Tab
        {...{
          id: "ICS Student Council",
          jobTitle: "Executive Board of Corporate Outreach",
          duration: "Jan. 2019 - Present",
          description1:
            "Improved student life at the Donald Bren School of Information and Computer Science academically, professionally, and socially by collaborating with large technology companies to host information workshops and sessions.",
          description2:
            "Promoted important events through different social media platforms and presentations.",
        }}
      ></Tab>
    </div>
  );
};

export default Table;
