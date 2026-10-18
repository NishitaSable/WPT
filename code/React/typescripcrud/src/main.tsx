// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ListEmployee from "./Listemployee.tsx";
import Nopage from "./Nopage.tsx";
import EmployeeId from './EmployeeId.tsx'
import EmployeeDel from "./EmployeeDel.tsx";
import CreateEmployee from "./CreateEmployee.tsx";




const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Listemployee" element={<ListEmployee />} /> 
          <Route path="employee/:id" element={<EmployeeId />} />  
          <Route path="empdel/:id" element={<EmployeeDel />} /> 
          <Route path="create" element={<CreateEmployee />} />
          <Route path="empup/:id" element={<CreateEmployee />} />  
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



