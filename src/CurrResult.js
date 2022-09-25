import React from 'react';

const CurrResult = () => {
    return (<div className="flex w-5/6">
            <div className="grid  h-60 flex-grow -py-2 -ml-4 px-2 bg-gray-100 place-items-center">
                <select id="currency-result"
                        className="text-gray-400 select outline outline-1 outline-slate-300 w-72 max-w-sm">
                    <option value="21000">Bitcoin(BTC)</option>
                    <option value="1500">Ethereum (ETH)</option>
                    <option value="400">Tether (USDT)</option>
                    <option value="500">Dogecoin (DOGE)</option>
                </select>
                <div className="grid h-40 ml-4">
                    <p><span id="coinumber">1</span> Bitcoin (BTC)
                        </p>
                        <p><span id="coinumber1">1</span> Ethereum (ETH)
                        </p>
                        <span>=</span>
                        <p>
                            <span className="font-bold hidden">21,626.17</span>
                            <span>
                  United States Dollar"$"
                  (USD)</span></p>
                    </div>

            </div>

            <div className="flex flex-grow grid h-60 -py-2 -ml-4 px-2 bg-gray-100 place-items-center">
                <select className="select outline outline-1 text-gray-600 outline-slate-300 w-72">
                    <option value="21000">United States Dollar "$" (USD)</option>
                    <option value="400">Argentine Peso "ARS" (ARS)</option>
                    <option value="500">Belarusian Ruble "Br" (BYN)</option>
                </select>
                <div className="grid h-40">
                        <button className="btn-sm btn-ghost rounded border border-gray-300 m-6 text-gray-600">Refresh</button>
                        <button className="btn-sm btn-ghost rounded border border-gray-300 m-6 text-gray-600">Save
                            This Conversion</button>
                    </div>
                </div>
    </div>


    );
};

export default CurrResult;