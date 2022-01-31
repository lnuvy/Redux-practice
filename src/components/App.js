import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../route/Home";
import Detail from "../route/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
