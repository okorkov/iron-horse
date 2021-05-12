import React, { Component } from "react";
import Navbar from "reactjs-navbar";
import logo from './iron-horse-white.png';
import Loader from "react-loader-spinner";
import {
  faUserCircle,
  faImages,
  faAddressBook,
  faTree,
  faHammer
} from "@fortawesome/free-solid-svg-icons";

import "reactjs-navbar/dist/index.css";





class Nav extends Component {
  state = {
    isLoading: false,
  };
 
  render() {

    return (
      <div id="navbar_top" className="navbar">
        <Navbar 
          logo={logo}
          loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
          isLoading={this.state.isLoading}
          menuItems={[
            {
              title: "About",
              icon: faUserCircle,
              path:"/",
              isAuth: true,
              onClick: () => {
                window.location.href = "#about";
              },
            },
            {
              title: "Gallery",
              icon: faImages,
              isAuth: true,
              subItems: [
                {
                  title: "Projects",
                  icon: faHammer,
                  isAuth: true,
                  onClick: () => {
                    window.location.href = "#projects";
                  },
                },
                {
                  title: "Wood",
                  icon: faTree,
                  isAuth: true,
                  onClick: () => {
                    window.location.href = "#wood";
                  },
                },
              ],
            },
            {
              title: "Contacts",
              icon: faAddressBook,
              isAuth: true,
              onClick: () => { 
                window.location.href = "#contacts";
              },
            },
          ]}
        />
      </div>
    );
  }
}


export default Nav;