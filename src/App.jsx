import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Desires from "./components/Desires";
import Reviews from "./components/Reviews";
import Spot from "./components/Spot";
import Footer from "./components/Footer";

const App = () => {
  return <div>
        <Header />
        <HeroSection />
        <Services />
        <Desires />
        <Reviews />
        <Spot />
        <Footer />
  </div>;
};

export default App;
