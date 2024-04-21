import React from "react";
import { FlavnoidsTable } from "./FlavnoidsTable";
import { GammaTable } from "./GammaTable";

function MainComponent() {
  return (
    <div style={{ textAlign: "center", margin: "auto", padding: "10px 30px" }}>
      <div style={{margin: "20px 10px"}}>Statistical Measures of Alcohol Classes by Category</div>
      <FlavnoidsTable />
      <GammaTable />
    </div>
  );
}

export default MainComponent;
