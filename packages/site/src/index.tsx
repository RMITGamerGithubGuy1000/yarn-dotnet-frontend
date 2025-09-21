import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { createStore } from "@frontend/state";

const preloadedState =
  typeof window !== "undefined" ? (window as any).__PRELOADED_STATE__ : undefined;

const store = createStore(preloadedState);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
