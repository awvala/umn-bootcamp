import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Contact from "./pages/Search";


class PortfolioContainer extends Component {
    state = {
      currentPage: "Home"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    render() {
      return (
        <div>
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          Based on `this.state.currentPage`, render the appropriate component
          here.
        </div>
      );
    }
  }
  
  export default PortfolioContainer;