import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jsondata from './../../../data/atlas.json';
import './AtlasSubjects.css';
import Sidebar from './../../sidebar/Sidebar.jsx';
import Header from './../../header/Header.jsx';

export default function AtlasSubjects({ atlas }) {
    const navigate = useNavigate();

    const [data, setData] = useState(atlas || jsondata);
    const [selectedSubject, setSelectedSubject] = useState(null);

    useEffect(() => {
        // Si los props `multiplechoices` cambian, actualiza `data`
        if (atlas) {
            setData(atlas);
        }
    }, [atlas]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleItemClick = (subject) => {
        setSelectedSubject(subject);
        navigate(`/atlasPages/${subject}`);
    };

    const uniqueSubjects = Array.from(new Set(data.map(atlas => atlas.subject)));

    return (
        <>
            <Header />
            <div className='divContainer'>
                <Sidebar />
                <div className='container'>
                    <div className="solidBgHeading mg">
                        <h2>Atlas</h2>
                    </div>
                    <ul className='subjects classifications'>
                        {uniqueSubjects.map((subject, index) => (
                            <li className='bgBlue' key={index} onClick={() => handleItemClick(subject)}>
                                <Link to={`/atlasPages/${subject}`} subject={subject} >{subject}</Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleGoBack} className='btnBackWhite'>Volver</button>
                </div>
            </div>


        </>
    );

}