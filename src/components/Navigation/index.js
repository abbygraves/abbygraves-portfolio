/* WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted */
/* WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted */

// INCOMPLETE
import React from "react";

// NAVIGATION COMPONENT
function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  console.log(props, currentPage);

  return (
    <nav>
      <ul>
        {pages.map((Page) => (
          <li
            className={`${
              currentPage.name === Page.name && "navActive"
            }`}
            key={Page.name}
          >
            <span onClick={() => {
              setCurrentPage(Page);
              }}
            >
              {Page.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
