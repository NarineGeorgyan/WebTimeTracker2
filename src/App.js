import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./UI/NavBar/NavigationBar";
import Card from "./UI/Card/Card";

import { Routes, Route } from "react-router";
import Setting from "./pages/Setting";
import Limit from "./pages/Limit";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="flex justify-content-md-center align-item-center">
          <Col md="6" xs="4">
            <Card>
              <NavigationBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/limit" element={<Limit />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
