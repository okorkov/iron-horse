import React, { Component } from "react";
 
import Navbar from "reactjs-navbar";
import logo from './iron-horse-white.png';
import Loader from "react-loader-spinner";
import {
  faUser,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs /*...*/,
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
            title: "Administration",
            icon: faUser,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
          {
            title: "Transactions",
            icon: null,
            isAuth: () => {
              // Claim authorization logic...
              return false;
            },
          },
          {
            title: "Networks",
            icon: null,
            isAuth: true,
          },
          {
            title: "Settings",
            icon: null,
            isAuth: true,
            subItems: [
              {
                title: "Subitem 1",
                icon: null,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Subitem 2",
                icon: null,
                isAuth: true,
                subItems: [
                  { title: "Subitem 2-1", icon: null, isAuth: true },
                  {
                    title: "Subitem 2-2",
                    icon: null,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Subitem 2-2-1",
                        icon: faUser,
                        isAuth: true,
                        subItems: [
                          {
                            title: "Subitem 2-2-2-1",
                            icon: faUser,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-2",
                            icon: faUser,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-3",
                            icon: faUser,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-4",
                            icon: faUser,
                            isAuth: true,
                          },
                        ],
                      },
                      {
                        title: "Subitem 2-2-2",
                        icon: null,
                        isAuth: true,
                      },
                    ],
                  },
                  {
                    title: "Make request",
                    icon: null,
                    isAuth: true,
                    onClick: () => {
                      // What you want to do...
                      this.setState({ isLoading: true }, () =>
                        setTimeout(() => {
                          this.setState({ isLoading: false });
                        }, 3000)
                      );
                    },
                  },
                ],
              },
              {
                title: "Subitem 3",
                icon: faUser,
                isAuth: () => {
                  // Claim authorization logic...
                  return false;
                },
              },
            ],
          },
          {
            title: "Reports",
            icon: faChartPie,
            isAuth: true,
          },
        ]}
      />
    );
  }
}

export default Nav;