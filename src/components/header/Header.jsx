import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/logo.png';

export default function Header() {
    return (
        <>
            <header className='whiteHeader'>
                <div className='logoContainer'>
                    <Link to="/" className="border-top homeA">
                        <img src={logo} alt="Logo de Actina" />
                    </Link>

                    <a href="/" className='homeA'>
                        <span className='user'>N</span>
                    </a>

                </div>
            </header>
        </>
    )
}