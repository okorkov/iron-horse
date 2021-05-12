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
      <Navbar
        logo={logo}
        loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "About",
            icon: faUserCircle,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
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
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Wood",
                icon: faTree,
                isAuth: true,
                
              },
            ],
          },
          {
            title: "Contacts",
            icon: faAddressBook,
            isAuth: true,
          },
        ]}
      />
    );
  }
}

export default Nav;