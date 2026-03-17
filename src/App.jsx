import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOption from "./components/Pricing/PricingOption";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <PricingOption />
      </main>
    </>
  );
};

export default App;
