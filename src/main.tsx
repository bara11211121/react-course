import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App.tsx";
import { Count } from "./pages/Count";
import { Gua } from "./pages/Gua";
import { Home } from "./pages/Home";
import { InputExam } from "./pages/InputExam";
import { TodoList } from "./pages/TodoList/TodoList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<App />} path="app" />
        <Route element={<InputExam />} path="input-exam" />
        <Route element={<Gua />} path="gua" />
        <Route element={<TodoList />} path="todo-list" />
        <Route element={<Count />} path="count" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
