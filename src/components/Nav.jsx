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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "reactjs-navbar/dist/index.css";
import About from './About';
import Contacts from './Contacts';
import WoodGallery from './WoodGallery';
import ProjectsGallery from './ProjectsGallery';
import ErrorPage from './ErrorPage';

 
class Nav extends Component {
  state = {
    isLoading: false,
  };
 
  render() {
    return (
      <Router>
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

                  },
                },
                {
                  title: "Wood",
                  icon: faTree,
                  isAuth: true,
                  onClick: () => {

                  },
                },
              ],
            },
            {
              title: "Contacts",
              icon: faAddressBook,
              isAuth: true,
              onClick: () => {

              },
            },
          ]}
        />

      <Switch>
        <Route path={'/'} exact component={About} />
        <Route path={'/contacts'} component={Contacts} />
        <Route path={'/projects'} component={ProjectsGallery} />
        <Route path={'/wood'} component={WoodGallery} />
        <Route component={ErrorPage} />
      </Switch>
      </Router>
    );
  }
}

export default Nav;