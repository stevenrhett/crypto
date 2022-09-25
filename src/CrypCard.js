import React from 'react';

const CryptCard = () => {
    return (
        <div>
            <div className="flex justify-center items-center  space-x-4">
                <div className="bitcoin">
                    <p className="text-black "><span id="coinumber">1 </span> Bitcoin (BTC)
                    </p>
                </div>
                <div className="ethereum">
                    <p className="text-black "><span id="coinumber1">1 </span> Ethereum (ETH)
                    </p>
                </div>
                <div className=" "><span>=</span></div>

                <p><span className="font-bold hidden" id="total">21,626.17</span><span id="convert_text">
                  States Dollar"$"
                  (USD)</span></p>

            </div>

            <div className="flex justify-center items-center space-x-2">
                <div id="refresh"
                     className=" bg-white text-gray-500 text-sm font-medium border border-slate-300 rounded p-2">
                    <button>Refresh</button>
                </div>
                <div id="save"
                     className=" bg-white text-gray-500 text-sm font-medium border border-slate-300 rounded p-2">
                    <button>Save
                        This Conversion
                    </button>
                </div>
            </div>
        </div>


    );
};

export default CryptCard;