import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Jobs from "./pages/jobs";
import HotArticles from "./pages/hotArticles";
import TopKeywords from "./pages/topKeywords";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/kr/jobs" element={<Jobs />} />
      <Route path="/hot_articles" element={<HotArticles />} />
      <Route path="/top_keywords" element={<TopKeywords />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
