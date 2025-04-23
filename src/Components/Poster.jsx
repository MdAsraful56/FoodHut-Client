import React from 'react';

const Poster = ({Title, Details}) => {
    return (
        <div className='poster my-20 h-[450px] bg-cover bg-center relative'>
            <section className="text-center absolute top-1/4">
                <div className="bg-[#111111a6] text-white md:mx-36 mx-9 rounded-xl md:py-20 py-12 md:px-20 px-5 space-x-4">
                    <h2 className="text-3xl mb-3">{Title}</h2>
                    <p className="">{Details}</p>
                </div>
            </section>
        </div>
    );
};

export default Poster;