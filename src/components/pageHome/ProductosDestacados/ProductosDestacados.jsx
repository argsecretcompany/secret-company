import React from 'react';
import './productosDestacados.css';
import ProductList from '../../../database/connectDatabase';
import { Link } from 'react-router-dom';

const ProductosDestacados = () => {
    const productos = ProductList();

    return (
        <div id="productosDestacados">
            <h2>Productos destacados</h2>

            <div id='productos'>
                {
                    productos.map(item => {
                        if (item.destacado) {
                            return (
                                <div className="producto" key={item.id}>
                                    <Link to={`/producto/${item.id}`}>
                                        <img src={require(`../../../img/products/${item.img[0]}`)} className='defaultImg' alt="" />
                                        <img src={require(`../../../img/products/${item.img[1]}`)} className='detalle' alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.price}</h4>
                                        <div id="buttonContainer">
                                            <button>Ver Producto</button>
                                        </div>
                                    </Link>

                                </div>
                            )
                        }

                        return null;
                    })
                }
            </div>
        </div>
    )
}

export default ProductosDestacados
