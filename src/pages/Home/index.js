import React from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default Home;
