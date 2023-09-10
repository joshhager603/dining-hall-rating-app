import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Danforth from "./pages/Danforth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Danforth" element={<Danforth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
