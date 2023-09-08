import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RealizarPedido from '../components/RealizarPedido/RealizarPedido.jsx'

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RealizarPedido/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;