import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/starred" />

        <Route path="*" />
      </Routes>
  );
}

export default App;
