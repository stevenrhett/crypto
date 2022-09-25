import React from 'react';

const TitleCard = () => {
    return (

        <div className="flex flex-col justify-items-center w-full mt-24">
            <div
                className="grid h-20 card  text-3xl font-bold rounded place-items-center">Cryptocurrency
                Converter Calculator
            </div>
            <div className="w-4/5 grid -m-0 place-items-start bg-gray-100 ml-8 px-8 py-6">
                <input type="text" placeholder="1" className="w-72 input input-bordered"/>
            </div>
        </div>
    );
}

export default TitleCard;