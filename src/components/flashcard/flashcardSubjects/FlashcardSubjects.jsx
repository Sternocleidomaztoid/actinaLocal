import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FlashcardSubjects.css';
import jsondata from './../../../data/flashcards.json';
import Sidebar from './../../sidebar/Sidebar.jsx';
import Header from './../../header/Header.jsx';

export default function FlashcardSubjects({ flashcards }) {
    const navigate = useNavigate();

    const [data, setData] = useState(flashcards || jsondata);
    const [selectedSubject, setSelectedSubject] = useState(null);

    useEffect(() => {
        // Si los props `multiplechoices` cambian, actualiza `data`
        if (flashcards) {
            setData(flashcards);
        }
    }, [flashcards]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleItemClick = (subject) => {
        setSelectedSubject(subject);
        navigate(`/flashcardTabs/${subject}`);
    };

    const uniqueSubjects = Array.from(new Set(data.map(flashcard => flashcard.subject)));

    return (
        <>
            <Header />
            <div className='divContainer'>
                <Sidebar />
                <div className='container'>
                    <div className="solidBgHeading mg">
                        <h2>Flashcards</h2>
                    </div>
                    <ul className='subjects classifications'>
                        {uniqueSubjects.map((subject, index) => (
                            <li className='bgBlue' key={index} onClick={() => handleItemClick(subject)}>
                                <Link to={`/flashcardTabs/${subject}`} subject={subject} >{subject}</Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleGoBack} className='btnBackWhite'>Volver</button>
                </div>
            </div>


        </>
    );

}