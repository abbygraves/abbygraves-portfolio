import React from "react";
// import Arrow from "../../assets/images/arrow.gif";
import Octocat from "../../assets/images/octocat-icon.svg";
import LinkedIn from "../../assets/images/linkedin-icon.svg";
import StackOverflow from "../../assets/images/stackOverflow-icon.svg";

// FOOTER COMPONENT
function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li id="octo">
            <a
              href="https://github.com/abbygraves"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Octocat}
                alt={"Clickable GitHub icon that opens my GitHub profile."}
                width="62px"
              />
            </a>
          </li>
          <li id="linked">
            <a
              href="https://www.linkedin.com/in/abbygraves/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedIn}
                alt={"Clickable LinkedIn icon that opens my LinkedIn profile."}
                width="52px"
              />
            </a>
          </li>
          <li id="stack">
            <a
              href="https://stackoverflow.com/users/20081497/abby-graves"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={StackOverflow}
                alt={"Clickable Stack Overflow icon that opens my profile on Stack Overflow's Website."}
                width="52px"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>&copy; Copyright 2022 by Abby Graves</p>
      </div>
    </footer>
  );
}

export default Footer;
