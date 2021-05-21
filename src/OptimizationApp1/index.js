import React from "react";

import Accordions from "./Accordions";

import { FormsStateProvider } from "./forms-context";

const OptimizationApp1 = () => (
  <FormsStateProvider>
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Accordions />
    </div>
  </FormsStateProvider>
);

export default OptimizationApp1;
