import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "@frontend/components";
import { TestEndpointPage } from "./Pages/TestEndpoint/TestEndpoint";
import { createStore } from "@frontend/state";
import { CookieClickerPage } from "./Pages/CookieClicker/CookieClicker";

interface AppProps {
  initialState?: any; // optional for SSR hydration
}

const App: React.FC<AppProps> = ({ initialState }) => {
  const store = createStore(initialState);

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/testForm" element={<TestEndpointPage />} />
        <Route path="/cookieclicker" element={<CookieClickerPage />} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Provider>
  );
};

export default App;
