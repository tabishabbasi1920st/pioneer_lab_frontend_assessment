import "./App.css";
// Pages...
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import Trade from "./pages/Trade";
// components..
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Organization" element={<Organization />} />
        <Route path="Trade" element={<Trade />} />
      </Routes>
    </Sidebar>
  );
}

export default App;
