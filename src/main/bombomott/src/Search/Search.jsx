import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ToTop from "../ToTop";
import SearchMain from "./SearchMain";

export default function Search() {
  return (
    <div className="main-container">
      <Header />
      <SearchMain />
      <Footer />
      <ToTop />
    </div>
  );
}
