import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOption from "./components/Pricing/PricingOption";
import SimpleBarChart from "./components/chats/Charts";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <PricingOption />
        <SimpleBarChart />
      </main>
    </>
  );
};

export default App;
