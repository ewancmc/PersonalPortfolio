import React from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
