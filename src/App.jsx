import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Producto from './pages/Producto/Producto';
import Carrito from './pages/Carrito/Carrito';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos/:category/" element={<Productos />} />
        <Route exact path="/productos/" element={<Productos />} />
        <Route exact path="/producto/:productID" element={<Producto />} />
        <Route exact path="/carrito" element={<Carrito />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
