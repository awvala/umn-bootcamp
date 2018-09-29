import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Home")} className="nav-link">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("About")} className="nav-link">
        About
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Discover")} className="nav-link">
        Discover
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Search")} className="nav-link">
        Search
      </a>
    </li>
  </ul>
);

export default NavTabs;
