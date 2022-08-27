import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroDetail } from "./pages/HeroDetail";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="hero/:heroId" element={<HeroDetail heroData />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
