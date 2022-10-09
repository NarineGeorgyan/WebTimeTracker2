import React from "react";
import Button from "react-bootstrap/Button";

const ButtonItem = (props) => {
  return (
    <>
      <Button
        variant="primary"
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </>
  );
};

export default ButtonItem;