import React, { useState, useEffect, useRef } from 'react';
import ProductList from '../../database/connectDatabase';
import Error404 from '../Error404/Error404';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './producto.css';

const Producto = () => {
    const productos = ProductList();
    const [productB, setProductB] = useState(false);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const talleS = useRef();
    const talleM = useRef();
    const talleL = useRef();
    const [TSClass, setTSC] = useState('active');
    const [TMClass, setTMC] = useState('desactive');
    const [TLClass, setTLC] = useState('desactive');
    const [talle, setTalle] = useState('S');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (productos.length > 0) {
            setLoading(false);
            productos.forEach(item => {
                if (
                    window.location.pathname === `/producto/${item.id}/` ||
                    window.location.pathname === `/producto/${item.id}`
                ) {
                    setProduct(item);
                    setProductB(true);
                }
            });
        }
    }, [productos]);

    useEffect(() => {
        if (productB) {
            function checkCartDetails() {
                let cart = JSON.parse(localStorage.getItem('cart'));
                var indice = cart.findIndex(function (objeto) {
                    return objeto.id === product.id;
                });
    
                if (indice >= 0) {
                    setTalle(cart[indice].talle);
                    cart[indice].talle === "S" ? setTSC('active') : setTSC('desactive');
                    cart[indice].talle === "M" ? setTMC('active') : setTMC('desactive');
                    cart[indice].talle === "L" ? setTLC('active') : setTLC('desactive');
                    setQuantity(cart[indice].cantidad);
                }
            }
    
            checkCartDetails();
        }
    }, [productB, product]);

    function changeClass(talle) {
        setTSC('desactive');
        setTMC('desactive');
        setTLC('desactive');

        if (talle === talleS) {
            setTSC('active');
            setTalle('S');
        } else if (talle === talleM) {
            setTMC('active');
            setTalle('M');
        } else if (talle === talleL) {
            setTLC('active');
            setTalle('L');
        }
    }

    function agregarAlCarrito(item) {
        let isInCart = false;
        let cart = JSON.parse(localStorage.getItem('cart'));
        const cartItem = {
            ...item,
            talle: talle,
            cantidad: quantity,
        };

        if (cart !== null) {
            cart.forEach(p => {
                if (p.id === product.id) {
                    alert('Producto editado correctamente.');
                    var indice = cart.findIndex(function (objeto) {
                        return objeto.id === product.id;
                    });

                    if (indice >= 0) {
                        cart[indice].talle = talle;
                        cart[indice].cantidad = quantity;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        isInCart = true;
                    }
                }
            });

            if (!isInCart) {
                cart.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Producto añadido correctamente.');
            }

            return;
        }

        cart = [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Producto añadido correctamente.');
    }

    function updateQuantity(boolean) {
        if (boolean && quantity < 10) {
            setQuantity(quantity + 1);
        }

        if (!boolean && quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    if (loading) {
        return (
            <>
                <NavBar />
                <p id="loading">Estamos cargando el producto...</p>
                <Footer />
            </>
        );
    } else if (productB) {
        return (
            <>
                <NavBar />

                <div id="productoContainer">
                    <div id="producto">
                        <img src={require(`../../img/products/${product.img[0]}`)} alt="" />
                        <div id="info">
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                            <div id="tallesContainer">
                                <p id="tallesTitle">Talles:</p>
                                <div id="talles">
                                    <button ref={talleS} className={TSClass} onClick={() => changeClass(talleS)}>
                                        <p>S</p>
                                    </button>
                                    <button ref={talleM} className={TMClass} onClick={() => changeClass(talleM)}>
                                        <p>M</p>
                                    </button>
                                    <button ref={talleL} className={TLClass} onClick={() => changeClass(talleL)}>
                                        <p>L</p>
                                    </button>
                                </div>
                            </div>
                            <div id="cantidadContainer">
                                <p id="cantidadTitle">Cantidad:</p>
                                <div id="cantidad">
                                    <button onClick={() => updateQuantity(false)}>
                                        <p>-</p>
                                    </button>
                                    <p id="quantityInput">{quantity}</p>
                                    <button onClick={() => updateQuantity(true)}>
                                        <p>+</p>
                                    </button>
                                </div>
                            </div>

                            <button id="addToCart" onClick={() => agregarAlCarrito(product)}>
                                <p>Añadir al carrito</p>
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    } else {
        return <Error404 />;
    }
};

export default Producto;