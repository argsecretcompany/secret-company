import React from 'react';
import './containerMe.css';
import { Link } from 'react-router-dom';

const ContainerMe = () => {
    return (
        <>
            <div className="container-me">
                <input type="checkbox" id="btn-mas" />
                <div className="redes">
                    <Link to="/" className="fa fa-facebook" id="fe"></Link>
                    <Link to="https://wa.me/message/5MOJCTDT3RNYK1" className="fa fa-whatsapp" id="wa"></Link>
                    <Link to="https://www.instagram.com/secretcompany.arg/" className="fa fa-instagram" id="ig"></Link>
                    <Link to="/" className="fa-brands fa-tiktok" id="tik"></Link>
                </div>
                <div className="btn-mas">
                    <label htmlFor="btn-mas" className="fa fa-plus"></label>
                </div>
            </div>
        </>
    )
}

export default ContainerMe