import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <Navbar className={styles.nav}>
      <Nav className="flex-column">
        <NavLink to="/" className="navbar-brand"></NavLink>
        <NavLink to="/limit" className="text-light p-2">
          Limits
        </NavLink>
        <NavLink to="/setting" className="text-light p-2">
          Settings
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
