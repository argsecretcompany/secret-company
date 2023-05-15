import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ImagenPrincipal from '../components/pageHome/ImagenPrincipal/ImagenPrincipal';
import ProductosDestacados from '../components/pageHome/ProductosDestacados/ProductosDestacados';
import VerTodos from '../components/pageHome/VerTodos/VerTodos';
import ElegirSeccion from '../components/pageHome/ElegirSeccion/ElegirSeccion';

const Home = () => {
  return (
    <>
      <NavBar />
      <ImagenPrincipal />
      <main>
        <ProductosDestacados />
        <VerTodos />
        <ElegirSeccion />
      </main>
      <Footer />
    </>
  )
}

export default Home
