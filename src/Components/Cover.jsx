import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({image, title, details}) => {
    return (
        <div className='mb-20'>
            <Parallax
                blur={{ min: -40, max: 40 }}
                bgImage={image}
                bgImageAlt="the dog"
                strength={-200}>
                    <div
                        className="hero h-[550px] relative "
                        style={{}}
                        >
                        <section className="text-center md:w-[1200px] w-[500px] absolute top-1/4">
                            <div className="text-white bg-[#111111a6] md:mx-36 mx-9 rounded-xl md:py-20 py-12 md:px-20 px-5 space-x-4">
                                <h2 className="text-5xl font-semibold uppercase mb-3">{title}</h2>
                                <p className="text-lg uppercase">{details}</p>
                            </div>
                        </section>
                    </div>
            </Parallax>
        </div>
    );
};

export default Cover;