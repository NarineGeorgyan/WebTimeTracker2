import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ButtonItem from "../UI/Button/ButtonItem";
import UsingSiteList from "./UsingSiteList";

const nextSiteId = (setUseSites) => {
  const maxId = setUseSites.reduce(
    (maxId, todo) => Math.max(todo.id, maxId),
    -1
  );
  return maxId === -1 ? 1 : maxId + 1;
};

const Time = (props) => {
  const [inputSiteName, setInputSiteName] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [updateSiteName, setUpdatedSiteName] = useState("");
  const [updatedTime, setUpdatedTime] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const dispatch = useDispatch();
  const setUseSites = useSelector((state) => state.useSites.useSites);

  const formDateHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_NEW_SITE",
      payload: {
        useSites: [
          {
            id: nextSiteId(setUseSites),
            site: inputSiteName,
            time: inputTime,
          },
        ],
      },
    });
    setInputSiteName("");
    setInputTime("");
    setUpdatedSiteName("");
  };
  const SiteChangeHandler = (e) => {
    setInputSiteName(e.target.value);
  };
  const TimeChangeHandler = (e) => {
    setInputTime(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        inputSiteName.trim().length > 0 && inputTime.trim().length > 0
      );
    }, 800);
    return () => clearTimeout(timer);
  }, [inputSiteName, inputTime]);

  const upDateHandler = (obj) => {
    setUpdatedSiteName(obj.site);
    setUpdatedTime(obj.time);
  };
  return (
    <>
      <Form className="p-4 p-sm-3 mb-4 " onSubmit={formDateHandler}>
        <Form.Text className="p-1 fs-4 fs-xs-3">
          Access daily restrictions for web sites
        </Form.Text>
        <Container className="d-flex flex-row gap-3 mt-3 flex-xs-wrap md-3 ">
          <Form.Control
            type="text"
            name="siteName"
            placeholder="Enter site name"
            value={inputSiteName || updateSiteName}
            onChange={SiteChangeHandler}
            required
          />
          <Form.Control
            type="time"
            name="time"
            value={inputTime || updatedTime}
            onChange={TimeChangeHandler}
            required
          />
          <ButtonItem type="submit" disabled={!formIsValid}>
            +
          </ButtonItem>
        </Container>
      </Form>

      <UsingSiteList onUpDateObject={upDateHandler} />
    </>
  );
};

export default Time;
