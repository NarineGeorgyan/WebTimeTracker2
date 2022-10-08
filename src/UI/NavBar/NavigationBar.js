import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  return (
    <>
      <Navbar className={styles.nav}>
        <Nav className="d-flex flex-column ">
          {props.data &&
            props.data.map((item, i) => (
              <Link
                className="d-flex justify-content-center border-1 px-3 pb-2 text-white  gap-2 "
                to={item.path}
                key={i}
              >
                <div className="icon">{item.icon}</div>
                <div className="link-name">{item.name} </div>
              </Link>
            ))}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
