import React from "react";
import Home from "./pages/Home";
import Navs from './components/Navs';
import Starred from './pages/Starred';
import NotFound from './pages/NotFound';
import Show from './pages/Show';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/starred" element={<Starred/>} />

        <Route path="/show/:id" element={<Show />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
      </ThemeProvider>
  );
}

export default App;
