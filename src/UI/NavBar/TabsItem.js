import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ByDay from "../../components/ByDay";
import Today from "../../components/Today";

const TabsItem = () => {
  const [key, setKey] = useState("home");
  return (
    <>
      <Tabs
        defaultActiveKey="today"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="today" title="Today">
          <Today />
        </Tab>
        <Tab eventKey="byDay" title="ByDay">
          <ByDay />
        </Tab>
      </Tabs>
    </>
  );
};

export default TabsItem;
