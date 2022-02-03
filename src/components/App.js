import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../route/Home";
import Detail from "../route/Detail";
import NotFound from "../route/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
