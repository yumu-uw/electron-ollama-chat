import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { App } from "./App"
import { HashRouter, Route, Routes } from "react-router"
import { App2 } from "./App2";

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="app2" element={<App2 />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);