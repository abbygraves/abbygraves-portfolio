/* WHEN I am presented with the Portfolio section
THEN I see titled images of 6 of the developer’s applications with links 
to both the deployed applications and the corresponding GitHub repository */

// INCOMPLETE

// THIS WILL INCLUDE (IMPORT) YOUR WORK: NAMES, DESCRIPTIONS, IMAGES & LINKS (SIMILAR TO PHOTOLIST FROM MODULE)
import React, { useState } from "react";
import AwkwardPartyPal from "../../assets/images/awkward-party-pal.png";
import HoldMeAcct from "../../assets/images/hold-me-acct.png";
import EmployeeTracker from "../../assets/images/employee-tracker.png";
import SocialNetworkApi from "../../assets/images/social-network-api.gif";
import WeatherDash from "../../assets/images/weather-dashboard.png";
import JATE from "../../assets/images/jate-install-video.gif";
import PassGen from "../../assets/images/password-generator.png";

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
      name: "Random Password Generator",
      imgAsset: PassGen,
      repoUrl: "https://github.com/abbygraves/3-pass-gen-mission",
      appUrl: "https://abbygraves.github.io/3-pass-gen-mission/",
    },
    {
      name: "Social Network API",
      imgAsset: SocialNetworkApi,
      repoUrl: "https://github.com/abbygraves/18-social-network-api",
      appUrl:
        "https://drive.google.com/file/d/1KBymuJL5zyXTYqLjzpgYPUy9uKXP8FeU/view",
    },
    {
      name: "CMS Employee Tracker ",
      imgAsset: EmployeeTracker,
      repoUrl: "https://github.com/abbygraves/12-employee-tracker",
      appUrl:
        "https://drive.google.com/file/d/1ZwuIVcQEKAH_52x-2PRGbkpRNI8LvL3L/view",
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
  ]);

  // FIXME: DESPERATLEY NEEDS STYLING 
  return (
    <section id="work" className="sections">
      <h2>My Work</h2>
      <div className="section-content">
        {projects.map((project, i) => (
          <div key={i}>
            <h3>
              <a href={project.appUrl}>{project.name}</a>
            </h3>
            <h4>
              <a href={project.repoUrl}>View the GitHub Repository</a>
            </h4>
            <img src={project.imgAsset} alt={project.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
