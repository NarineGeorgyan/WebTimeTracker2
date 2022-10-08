import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Setting from "./pages/Setting";
import Limit from "./pages/Limit";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="APP">
        <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/limit" element={<Limit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
