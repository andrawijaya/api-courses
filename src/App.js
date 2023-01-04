import React from "react";
import {RouterProvider} from "react-router-dom";

import navigationConfigs from "./navigation/navigationConfigs";

function App() {
  return <RouterProvider router={navigationConfigs} />
}

export default App;
