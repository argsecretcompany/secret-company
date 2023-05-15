import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div id="topFooter">
                <nav>
                    <p className='footerTitle'>Navegación</p>
                    <div id="links">
                        <Link to="/">Inicio</Link>
                        <Link to="/productos/">Productos</Link>
                        <Link to="/contacto">Contacto</Link>
                    </div>
                </nav>

                <div id="contacto">
                    <p className='footerTitle'>Contáctanos</p>
                    <ul>
                        <li>secretcompanyarg@gmail.com</li>
                        <li>+54 3516 06-9608</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
