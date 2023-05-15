import React, { useState, useEffect } from 'react';
import './productosSection.css';
import ProductList from '../../../database/connectDatabase';
import { SearchIcon } from '../../../img/SearchIcon';
import { Link } from 'react-router-dom';

const ProductosSection = ({ section, title }) => {
  const productos = ProductList();

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (section === "") {
      setItems(productos);
    } else {
      const itemsFiltrados = productos.filter(item => item.tipo === section);
      setItems(itemsFiltrados);
    }
  }, [section, productos]);

  const filterHigherLower = () => {
    const itemsOrdenados = [...items].sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    setItems(itemsOrdenados);
  };

  const filterLowerHigher = () => {
    const itemsOrdenados = [...items].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    setItems(itemsOrdenados);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    const itemsFiltrados = productos.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setItems(itemsFiltrados);
  };


  return (
    <>
      <div id="productsFilterContainer">
        <div id="inputContainer">
          <input type="text" placeholder="Buscar" value={searchTerm} onChange={handleSearchTermChange} />
          <SearchIcon />
        </div>

        <div id="priceFilter">
          <p>Filtrar</p>

          <div className="options">
            <div className="items">
              <button onClick={filterHigherLower}>Mayor a menor</button>
              <button onClick={filterLowerHigher}>Menor a mayor</button>
            </div>
          </div>
        </div>
      </div>

      <div id="productosSection">
        <h2>Productos</h2>
        <h1>{title}</h1>

        <div id="productos">
          {
            items.map(item => {
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
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default ProductosSection
