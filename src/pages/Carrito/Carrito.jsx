import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import PayCart from '../../mercadopago/payCart';
import './carrito.css';

const Carrito = () => {
  const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('cart')));

  function eliminarItem(id) {
    var indice = productos.findIndex(function (objeto) {
      return objeto.id === id;
    });

    if (indice >= 0) {
      productos.splice(indice, 1);
      localStorage.setItem('cart', JSON.stringify(productos));
      setProductos(JSON.parse(localStorage.getItem('cart')));
    }
  }

  if (productos !== null && productos.length > 0) {
    return (
      <>
        <NavBar />
        <PayCart productos={productos} />

        <div id="carritoContainer">
          <h1>Carrito</h1>

          <div id="carrito">
            {
              productos.map(item => {
                return (
                  <div className="cartProduct" key={item.id}>
                    <div className="imgContainer">
                      <img src={require(`../../img/products/${item.img[0]}`)} alt={`${item.name}-img1`} />
                    </div>
                    <div className='nameContainer'>
                      <p>{item.name}</p>
                    </div>
                    <div className='priceContainer'>
                      <p>{item.price}</p>
                    </div>
                    <div className='deleteContainer'>
                      <button onClick={() => { eliminarItem(item.id) }}>
                        <p>Eliminar</p>
                      </button>
                    </div>
                    <Link to={`/producto/${item.id}/`}>
                      <div className="quantityContainer">
                        <div className="quantity">
                          <p>{item.cantidad}</p>
                        </div>
                        <div className="talle">
                          {item.talle}
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>

        <Footer />
      </>
    )
  } else {
    return (
      <>
        <NavBar />

        <div id="carritoContainer">
          <h1 style={{ marginTop: 20 }}>Carrito</h1>

          <div id="carrito">
            <p id='emptyCartText'>El Carrito está vacío.</p>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}

export default Carrito