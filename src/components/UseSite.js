import React from "react";
import { Container } from "react-bootstrap";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import ButtonItem from "../UI/Button/ButtonItem";

const UseSite = (props) => {
  const editHandler = (id) => {
    console.log(id);
  };
  const deleteHandler = (id) => {
    console.log("del");
  };
  return (
    <tr className="text-center fs-5">
      <th scope="row">{props.id}</th>
      <td>{props.site}</td>
      <td>{props.time}</td>
      <td>
        <Container className="d-flex flex-row gap-2 align-items-center  justify-content-end ">
          <ButtonItem onClick={(id) => editHandler(id)}>
            <MdModeEdit className="text-danger fs-5" />
          </ButtonItem>
          <ButtonItem onClick={deleteHandler}>
            <MdDeleteForever className="text-danger fs-5" />
          </ButtonItem>
        </Container>
      </td>
    </tr>
  );
};

export default UseSite;
