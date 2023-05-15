import React from 'react';
import './elegirSeccion.css';
import { Link } from 'react-router-dom';

const ElegirSeccion = () => {
  return (
    <div id="elegirSeccion">
      <Link to="/productos/hoodies/">
        <div className="section">
          <img src={require('../../../img/hoodies.webp')} alt="" />
          <p>HOODIES</p>
        </div>
      </Link>
      <Link to="/productos/remeras/">
        <div className="section">
          <img src={require('../../../img/remeras.webp')} alt="" />
          <p>REMERAS</p>
        </div>
      </Link>
    </div>
  )
}

export default ElegirSeccion
