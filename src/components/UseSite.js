import React from "react";
import { Container } from "react-bootstrap";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import ButtonItem from "../UI/Button/ButtonItem";

const UseSite = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    console.log(id);
    dispatch({ type: "DELETE_SITE", payload: id });
  };
  const editHandler = (id) => {
    dispatch({ type: "EDIT_SITE", payload: id });
  };
  return (
    <tr className="text-center fs-5">
      <td>{props.id}</td>
      <td>{props.site}</td>
      <td>{props.time}</td>
      <td>
        <Container className="d-flex flex-row gap-2 align-items-center  justify-content-end ">
          <ButtonItem onClick={() => editHandler(props.id)}>
            <MdModeEdit className="text-danger fs-5" />
          </ButtonItem>
          <ButtonItem onClick={() => deleteHandler(props.id)}>
            <MdDeleteForever className="text-danger fs-5" />
          </ButtonItem>
        </Container>
      </td>
    </tr>
  );
};

export default UseSite;
