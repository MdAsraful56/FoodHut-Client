import React from 'react';

const Btn = ({BtnName}) => {
    return (
        <div>
            <button className="btn btn-neutral btn-outline text-center border-b-4 border-[#BB8506] border-[0.5px] hover:border-b-0">{BtnName}</button>
        </div>
    );
};

export default Btn;