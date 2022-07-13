import React from "react";
import Home from "./pages/Home";
import Navs from './components/Navs';
import Starred from './pages/Starred';
import NotFound from './pages/NotFound';
import Show from './pages/Show';
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

        <Route path="/starred" element={<Starred/>} />

        <Route path="/show/:id" element={<Show />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
}

export default App;
