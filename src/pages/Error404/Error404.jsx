import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './error404.css';

const Error404 = () => {
  return (
    <>
      <NavBar  /> 
      <main id="error404">
        <h1>Error 404</h1>
      </main>
      <Footer />
    </>
  )
}

export default Error404
