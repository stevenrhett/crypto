import React from 'react';

const CryptoCalc = () => {
    return (
        <div>
            <div className="m-4 flex space-x-2">
                <div className="w-1/2">
                    <input className="bg-slate-50 rounded p-4 w-full max-w-xs" id="type-amount" type="number"
                           placeholder="type amount"/>
                </div>

                <div className="w-auto"></div>
            </div>
        </div>
    );
};

export default CryptoCalc;