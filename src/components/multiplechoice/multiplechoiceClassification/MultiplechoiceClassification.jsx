import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import jsondata from './../../../data/multiplechoices.json';
import Sidebar from './../../sidebar/Sidebar.jsx';
import Header from './../../header/Header.jsx';

export default function MultiplechoiceClassification({ multiplechoices }) {
    const { subject } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(multiplechoices || jsondata);
    const [selectedClassification, setSelectedClassification] = useState(null);


    useEffect(() => {
        // Si los props `multiplechoices` cambian o son nulos, actualiza `data`
        if (!multiplechoices) {
            setData(jsondata);
        } else {
            setData(multiplechoices);
        }
    }, [multiplechoices]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleItemClick = (classification) => {
        setSelectedClassification(classification);
    };

    const filteredClassifications = data
        .filter((multiplechoice) => multiplechoice.subject === subject)
        .map((multiplechoice, index) => (
            <li className='bgBlue' key={index} onClick={() => handleItemClick(multiplechoice.classification)}>
                <Link to={`/multiplechoiceQuestions/${multiplechoice.classification}`}>
                    {multiplechoice.classification}
                </Link>
            </li>
        ));

    console.log(filteredClassifications);

    return (
        <>
            <Header />
            <div className="divContainer">
                <Sidebar />
                <div className="container">
                    <div className="solidBgHeading mg">
                        <h2>Multiplechoice</h2>
                    </div>
                    <ul className='classifications'>
                        {filteredClassifications}
                    </ul>
                    <button onClick={handleGoBack} className='btnBackWhite'>Volver</button>
                </div>
            </div>


        </>
    );
}