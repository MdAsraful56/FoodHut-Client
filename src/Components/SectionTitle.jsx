import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 text-center mx-auto my-8'>
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <p className="uppercase text-2xl border-y-2 border-gray-600 py-3">{heading}</p>
        </div>
    );
};

export default SectionTitle;