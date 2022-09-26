/* WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) */

// INCOMPLETE
import React from "react";

// FOOTER COMPONENT
function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; Copyright 2022 by Abby Graves</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://github.com/abbygraves" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abbygraves/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/20081497/abby-graves" target="_blank" rel="noreferrer">Stack Overflow</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
