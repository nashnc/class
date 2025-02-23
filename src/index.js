import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./components/store/store";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/class">
    <Provider store={store}>
      {/* <AutoLogin> */}
      <RouterProvider router={router} />
      {/* </AutoLogin> */}
    </Provider>
  </BrowserRouter>
);

export default reportWebVitals();
