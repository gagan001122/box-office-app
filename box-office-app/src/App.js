import React from "react";
import Home from "./pages/Home";
import Navs from './components/Navs';
import Starred from './pages/Starred';
import NotFound from './pages/NotFound';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div>
       <Navs />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/starred" element={<Starred/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
  );
}

export default App;
