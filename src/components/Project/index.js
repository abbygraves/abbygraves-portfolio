// THIS WILL INCLUDE (IMPORT) YOUR WORK: NAMES, DESCRIPTIONS, IMAGES & LINKS (SIMILAR TO PHOTOLIST FROM MODULE)
import React, { useState } from "react";
import AwkwardPartyPal from "../../assets/images/awkward-party-pal.png";
import HoldMeAcct from "../../assets/images/hold-me-acct.png";
import EmployeeTracker from "../../assets/images/employee-tracker.png";
import SocialNetworkApi from "../../assets/images/social-network-api.gif";
import WeatherDash from "../../assets/images/weather-dashboard.png";
import JATE from "../../assets/images/jate-install-video.gif";
import PassGen from "../../assets/images/password-generator.png";
import CodeQuiz from "../../assets/images/code-quiz.png";
import ICanHaz from "../../assets/images/i-can-haz.png";

// PROJECT/PORTFOLIO COMPONENT
const Portfolio = () => {
  const [projects] = useState([
    {
      name: "Awkward Party Pal",
      imgAsset: AwkwardPartyPal,
      repoUrl: "https://github.com/abbygraves/awkward-party-pal",
      appUrl: "https://abbygraves.github.io/awkward-party-pal/",
    },
    {
      name: "Hold Me Accountable",
      imgAsset: HoldMeAcct,
      repoUrl: "https://github.com/abbygraves/hold-me-accountable",
      appUrl: "https://afternoon-depths-64455.herokuapp.com/login",
    },
    {
      name: "I Can Haz",
      imgAsset: ICanHaz,
      repoUrl: "https://github.com/jbradley84/i-can-haz",
      appUrl: "https://i-can-hazz.herokuapp.com/",
    },
    {
      name: "Social Network API",
      imgAsset: SocialNetworkApi,
      repoUrl: "https://github.com/abbygraves/18-social-network-api",
      appUrl: "https://drive.google.com/file/d/1KBymuJL5zyXTYqLjzpgYPUy9uKXP8FeU/view",
    },
    {
      name: "CMS Employee Tracker ",
      imgAsset: EmployeeTracker,
      repoUrl: "https://github.com/abbygraves/12-employee-tracker",
      appUrl: "https://drive.google.com/file/d/1ZwuIVcQEKAH_52x-2PRGbkpRNI8LvL3L/view",
    },
    {
      name: "Weather Dashboard",
      imgAsset: WeatherDash,
      repoUrl: "https://github.com/abbygraves/6-weather-dash",
      appUrl: "https://abbygraves.github.io/6-weather-dash/",
    },
    {
      name: "PWA Text Editor",
      imgAsset: JATE,
      repoUrl: "https://github.com/abbygraves/19-pwa-text-editor",
      appUrl: "https://fast-headland-03231.herokuapp.com/",
    },
    {
      name: "Coding Quiz",
      imgAsset: CodeQuiz,
      repoUrl: "https://github.com/abbygraves/4-code-quiz",
      appUrl: "https://abbygraves.github.io/4-code-quiz/",
    },
  ]);

  return (
    <section className="sections work">
      <h2 className="work-h2tag">My Work</h2>
      <div className="section-content">
        {projects.map((project, i) => (
          <div className="wrapper">
            <div className="container" key={i}>
              <a href={project.appUrl}>
                <img src={project.imgAsset} alt={project.name} />
              </a>
              <div className="text-block">
                {project.name}
                <br/>
                <a href={project.repoUrl}>View the GitHub Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
