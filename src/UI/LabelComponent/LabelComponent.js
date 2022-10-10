import React from "react";
import { Row } from "react-bootstrap";
import UseSiteList from "../../components/UsingSiteList";

const LabelComponent = (props) => {
  return (
    <>
      <UseSiteList data={props.data} />
    </>
  );
};

export default LabelComponent;
