import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
    const [isClosed, setIsClosed] = useState(true);

    const handleToggleClick = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className="sidebarWrapper">
            <nav className={`sidebar ${isClosed ? 'close' : ''}`}>
                <header>
                    <span className="material-icons toggle" onClick={handleToggleClick}>
                        chevron_right
                    </span>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link" id="border-top">
                                <Link to="/" className="border-top">
                                    <span className="material-icons icon">home</span>
                                    <span className="text nav-text">Home</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/multiplechoiceSubjects">
                                    <span className="material-icons icon">summarize</span>
                                    <span className="text nav-text">Multiplechoice</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/flashcardsSubjects">
                                    <span className="material-icons icon">art_track</span>
                                    <span className="text nav-text">Flashcards</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/atlasSubjects">
                                    <span className="material-icons icon">menu_book</span>
                                    <span className="text nav-text">Atlas</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/">
                                    <span className="material-icons icon">folder</span>
                                    <span className="text nav-text">Mis Actividades</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/">
                                    <i className='bx bxs-bookmark icon'></i>
                                    <span className="text nav-text">Favoritos</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/">
                                    <span className="material-icons icon">chat</span>
                                    <span className="text nav-text">Chat</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/" className='border-bottom'>
                                    <span className="material-icons icon">add_circle</span>
                                    <span className="text nav-text">Crear</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}