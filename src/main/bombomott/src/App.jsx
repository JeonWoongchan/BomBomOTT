import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Intro from "./Intro/Intro";
import Main from "./Main/Main";
import Content from "./Content/Content";
import useApi from "./useApi";

import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import Search from "./Search/Search";

function App() {
  useApi();
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/content" element={<Content />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:keyword" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
