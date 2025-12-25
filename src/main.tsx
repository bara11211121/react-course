import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App.tsx";
import { DodoList } from "./pages/DodoList/DodoList.tsx";
import { Gua } from "./pages/Gua";
import { Home } from "./pages/Home";
import { InputExam } from "./pages/InputExam";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<App />} path="app" />
        <Route element={<InputExam />} path="input-exam" />
        <Route element={<Gua />} path="gua" />
        <Route element={<DodoList />} path="dodo-list" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
