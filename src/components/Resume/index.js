// RESUME COMPONENT
import React from "react";
import ResumeImg from "../../assets/images/resume-screenshot.png";

function Resume() {
  return (
    <div className="sections resume">
      <div>
        <h2>Proficiencies</h2>
        <ul className="section-content">
          <li>Git</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>APIs</li>
          <li>Insomnia</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>VS Code</li>
          <li>MacOS</li>
          <li>Windows</li>
          <li>& more!</li>
        </ul>
      </div>

      <div>
        <h2>Resume</h2>
        <div>
          <a 
            href="https://drive.google.com/file/d/1ujAuoAskpuWwLiakgugKw6tulgHWn87G/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img 
              src={ResumeImg}
              alt={"Screen capture of the front page of my resume."}
              width="350px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
