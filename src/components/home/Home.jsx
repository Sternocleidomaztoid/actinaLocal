import React from "react";
import Header from '../header/Header.jsx';
import Sidebar from "../sidebar/Sidebar.jsx";
import "./Home.css";

export default function Home() {
    return (
        <>
        <Header />
        <div className='divContainer'>
                <Sidebar />
                <div className='container'>
                    <div className='homeSection'>
                        <h2 className='searchTitle'>Hola, Bienvenid@!</h2>
                        <div className='searchField'>
                            <span className="bx bx-search icon" />
                            <input placeholder='Buscar' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}