import React from 'react';

const CurrResult = () => {
    return (

        <div className="flex space-x-2">
            <div className="w-1/2">
                <select id="currency-result" className="select outline outline-1 outline-slate-600 w-full max-w-sm">
                    <option value="21000">Bitcoin(BTC)</option>
                    <option value="1500">Ethereum (ETH)</option>
                    <option value="400">Tether (USDT)</option>
                    <option value="500">Dogecoin (DOGE)</option>
                </select>
            </div>
            <div className="mt-auto">

                <button className="bg-blue-300 hover:bg-blue-500 w-auto h-auto rounded-sm" id="btn-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                </button>
            </div>
            <div className="w-1/2">

                <select className="select outline outline-1 outline-slate-600 w-full max-w-xs">
                    <option value="21000">United States Dollar "$" (USD)</option>
                    <option value="400">Argentine Peso "ARS" (ARS)</option>
                    <option value="500">Belarusian Ruble "Br" (BYN)</option>
                </select>
            </div>
        </div>

    );
};

export default CurrResult;