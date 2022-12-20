import React from "react";
import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Skills from "./sections/Skills/Skills";
import Testimonials from "./sections/Testimonials/Testimonials";
import Work from "./sections/Work/Work";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
