import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jsondata from './../../../data/multiplechoices.json';
import './MultiplechoiceSubjects.css';
import Sidebar from './../../sidebar/Sidebar.jsx';
import Header from './../../header/Header.jsx';

export default function MultiplechoiceSubject({ multiplechoices }) {
    const navigate = useNavigate();

    const [data, setData] = useState(multiplechoices || jsondata);
    const [selectedSubject, setSelectedSubject] = useState(null);

    useEffect(() => {
        // Si los props `multiplechoices` cambian, actualiza `data`
        if (multiplechoices) {
            setData(multiplechoices);
        }
    }, [multiplechoices]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleItemClick = (subject) => {
        setSelectedSubject(subject);
    };

    const uniqueSubjects = Array.from(new Set(data.map(multiplechoice => multiplechoice.subject)));

    return (
        <>
            <Header />
            <div className='divContainer'>
                <Sidebar />
                <div className='container'>
                    <div className="solidBgHeading mg">
                        <h2>Multiplechoice</h2>
                    </div>
                    <ul className='subjects classifications'>
                        {uniqueSubjects.map((subject, index) => (
                            <li className='bgBlue' key={index} onClick={() => handleItemClick(subject)}>
                                <Link to={`/multiplechoiceClassification/${subject}`} subject={subject} >{subject}</Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleGoBack} className='btnBackWhite'>Volver</button>
                </div>
            </div>
        </>
    );

}

