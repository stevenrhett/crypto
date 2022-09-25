import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TitleCard from "./TitleCard";
import CurrResult from "./CurrResult";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TitleCard/>
        <CurrResult/>

    </React.StrictMode>
);




