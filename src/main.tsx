import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import { Gua } from "./pages/Gua";
import { InputExam } from "./pages/InputExam";
import { DodoList } from "./pages/DodoList/DodoList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<App />} />
        <Route path="input-exam" element={<InputExam />} />
        <Route path="gua" element={<Gua />} />
        <Route path="dodo-list" element={<DodoList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
