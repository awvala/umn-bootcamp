import React from "react";
//import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const styles = {
   headerStyle: {
    background: '#b71775',
    height: '200 px',
  },
  headingStyle: {
    margin: 0,
    padding-top: '75px',
    text-align: 'center',
    color: 'white',
    font-size: '3rem'
  }
}

const Header = () => (
  <header className="header">
    <h1>Welcome</h1>
  </header>
);

export default Header;
