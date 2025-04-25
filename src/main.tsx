import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import ProjectsPage from "./ProjectsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<ProjectsPage />} /> {/* unused for now */}
      </Routes>
    </Router>
  </StrictMode>
);
