//Jake Li
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./componenent/Add";
import Home from "./componenent/Home";
import Update from "./componenent/Update";

const App: React.FC = () => {

  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
