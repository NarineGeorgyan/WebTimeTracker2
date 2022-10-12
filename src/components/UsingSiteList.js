import React from "react";
import { useSelector } from "react-redux";
import UseSite from "./UseSite";

const UsingSiteList = (props) => {
  const setUseSites = useSelector((state) => state.useSites.useSites);
  return (
    <>
      <table className="table table-light">
        <thead>
          <tr className="text-center fs-4">
            <th scope="col">#</th>
            <th scope="col">Site</th>
            <th scope="col">Time</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {setUseSites && setUseSites.length ? (
            setUseSites.map((useSite, i) => (
              <UseSite
                {...useSite}
                key={i}
                setUpdateDate={props.onUpDateObject}
              />
            ))
          ) : (
            <tr className="text-danger fs-4 text-center">
              <td scope="row" colSpan="4">
                Nothing is found...Add a new Site
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UsingSiteList;
