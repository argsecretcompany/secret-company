import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Error404 from './Error404/Error404';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductosSection from '../components/pageProductos/ProductosSection/ProductosSection';

const Productos = () => {
  const location = useLocation();
  const [section, setVariable] = useState("");
  const [haySection, setSection] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    function checkSection() {
      setError(false);

      if (location.pathname === "/productos/hoodies" || location.pathname === "/productos/hoodies/") {
        setVariable("hoodie");
        setSection(true);
        setTitle("Hoodies");
        return;
      } 
      
      if (location.pathname === "/productos" || location.pathname === "/productos/") {
        setVariable("");
        setSection(true);
        setTitle("Todos");
        return;
      }

      setError(true);
    }

    checkSection();
  }, [location]);

  if (error) {
    return <Error404 />;
  } else if (haySection) {
    return (
      <>
        <NavBar />
        <main>
          <ProductosSection section={section} title={title} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Productos
