import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrived from "./components/Arrived";
import Clients from "./components/Clients";
import ASideMenu from "./components/ASideMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <ASideMenu />
      <Footer />
    </>
  );
}

export default App;
