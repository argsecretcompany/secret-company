import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../database/connectDatabase';
import './carrito.css';

const Carrito = () => {
  const productos = ProductList();

  return (
    <>
      <NavBar />

      <div id="finishCart">
        <button>
          <p>Finalizar compra</p>
        </button>
      </div>

      <div id="carritoContainer">
        <h1>Carrito</h1>

        <div id="carrito">
          {
            productos.map(item => {
              return (
                <div className="cartProduct" key={item.id}>
                  <div className="imgContainer">
                    <img src={require(`../../img/products/${item.img[0]}`)} alt={`${item.name}-img1`}/>
                  </div>
                  <div className='nameContainer'>
                    <p>{item.name}</p>
                  </div>
                  <div className='priceContainer'>
                    <p>{item.price}</p>
                  </div>
                  <div className='deleteContainer'>
                    <button>
                      <p>Eliminar</p>
                    </button>
                  </div>
                  <div className="quantityContainer">
                    <div className="quantity">
                      <p>1</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Carrito