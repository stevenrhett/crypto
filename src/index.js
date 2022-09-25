import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TitleCard from "./TitleCard";
import MainPage from "./MainPage";
import CryptoCalc from "./CryptoCalcu";
import CurrResult from "./CurrResult";
import CrypCard from "./CrypCard";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <TitleCard/>
        <MainPage/>
        <CryptoCalc/>
        <CurrResult/>
        <CrypCard/>
    </React.StrictMode>
);




