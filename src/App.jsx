import React, { useState, useEffect } from 'react'; 
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home.jsx';
import MultiplechoiceSubjects from './components/multiplechoice/multiplechoiceSubjects/MultiplechoiceSubjects.jsx';
import MultiplechoiceClassification from './components/multiplechoice/multiplechoiceClassification/MultiplechoiceClassification.jsx';
import MultiplechoiceQuestions from './components/multiplechoice/multiplechoiceQuestions/MultiplechoiceQuestions.jsx';
import FlashcardSubjects from './components/flashcard/flashcardSubjects/FlashcardSubjects.jsx';
import FlashcardTabs from './components/flashcard/flashcardTabs/FlashcardTabs.jsx';
import AtlasSubjects from './components/atlas/atlasSubjects/AtlasSubjects.jsx';
import AtlasPages from './components/atlas/atlasPages/AtlasPages.jsx';

import multiplechoicesData from './data/multiplechoices.json';
import flashcardsData from './data/flashcards.json';
import atlasData from './data/atlas.json';

function App() {

    const [multiplechoices, setMultiplechoices] = useState([]);
    const [flashcards, setFlashcards] = useState([]);
    const [atlas, setAtlas] = useState([]);

    useEffect(() => {
        console.log("Iniciando componente");

        // Cargar los datos desde los archivos JSON
        setMultiplechoices(multiplechoicesData);
        setFlashcards(flashcardsData);
        setAtlas(atlasData);
    }, []);

    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/multiplechoiceSubjects" element={<MultiplechoiceSubjects multiplechoices={multiplechoices} />} />
                    <Route path="/multiplechoiceClassification/:subject" element={<MultiplechoiceClassification multiplechoices={multiplechoices} />} />
                    <Route path="/multiplechoiceQuestions/:classification" element={<MultiplechoiceQuestions multiplechoices={multiplechoices} />} />
                    <Route path="/flashcardsSubjects" element={<FlashcardSubjects flashcards={flashcards} />} />
                    <Route path="/flashcardTabs/:subject" element={<FlashcardTabs flashcards={flashcards} />} />
                    <Route path="/atlasSubjects" element={<AtlasSubjects atlas={atlas} />} />
                    <Route path="/atlasPages/:subject" element={<AtlasPages atlas={atlas} />} />
                </Routes>
        </>
    )
}
export default App;