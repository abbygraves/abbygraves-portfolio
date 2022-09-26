/* WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer  */
/* WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default */

// INCOMPLETE

// THIS WILL INCLUDE (IMPORT) THE FOLLOWING COMPONENTS: ABOUT, PROJECT (AKA PORTFOLIO), CONTACT, & RESUME
import React from "react";
import About from "../About";
import Portfolio from "../Project";
import Contact from "../Contact";
import Resume from "../Resume";

// PAGE COMPONENT
function Page({ currentPage }) {
  const pageRender = () => {
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>{pageRender(currentPage)}</div>
  );
}

export default Page;
