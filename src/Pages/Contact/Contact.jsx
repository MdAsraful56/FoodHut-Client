import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import contactImg from '../../assets/contact/banner.jpg';
import Cover from '../../Components/Cover';
import SectionTitle from '../../Components/SectionTitle';
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { IoIosTime } from 'react-icons/io';
import { AuthContext } from '../../Providers/AuthProvider';
import { BsFillSendFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Contact = () => {

    const { user } = useContext(AuthContext);
    // const axiosPublic = useAxiosPublic();


    const handleSendMessage = e => {
        // e.preventdefault();
        e.preventDefault();
        const form = e.target;
        const name = form[0].value;
        const phone = form[1].value;
        const email = form[2].value;
        const textarea = form[3].value;
        console.log(name, phone, email, textarea);
        // const contactData = {name, phone, email, textarea};
        // axiosPublic.post('/contactData', contactData)
        //     .then( res => res.data )
        Swal.fire({
            title: "Send Message Successfully!",
            icon: "success",
            draggable: true
        });
        form.reset();
    }



    return (
        <div>
            <Helmet>
                <title>FoodHut || Contact</title>
            </Helmet>
            <div className="">
                <Cover image={contactImg} title={'Contact Us'} details={'would you like to try a dish ? '} />
                <SectionTitle subHeading={'Visit Us'} heading={'Our Location'} />
                <div className="flex md:flex-row flex-col mx-32 justify-center items-center gap-10 my-10">
                    <div className="border w-52 h-28 shadow-lg">
                        <div className="bg-amber-300 flex justify-center items-center px-10 py-1">
                            <FaPhoneVolume size={18} />
                        </div>
                        <div className="text-center bg-[#F3F3F3] flex flex-col justify-center items-center py-4 mx-4">
                            <h1 className="text-base uppercase">Phone</h1>
                            <p className="text-xs">+8801889245756</p>
                        </div>
                    </div>
                    
                    <div className="border w-52 h-28 shadow-lg">
                        <div className="bg-amber-300 flex justify-center items-center px-10 py-1">
                            <FaLocationDot size={18} />
                        </div>
                        <div className="text-center bg-[#F3F3F3] flex flex-col justify-center items-center py-4 mx-4">
                            <h1 className="text-base uppercase">Adderss</h1>
                            <p className="text-xs">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="border w-52 h-28 shadow-lg">
                        <div className="bg-amber-300 flex justify-center items-center px-10 py-1">
                            <IoIosTime size={18} />
                        </div>
                        <div className="text-center bg-[#F3F3F3] flex flex-col justify-center items-center py-4 mx-4">
                            <h1 className="text-base uppercase">Working Time</h1>
                            <p className="text-xs">Mon - Fri: 08:00 - 22:00</p>
                        </div>
                    </div>

                </div>
                <SectionTitle subHeading={'Send Us a Message'} heading={'contact Form'} />
                <div className="flex justify-center items-center my-10">
                    <form onSubmit={handleSendMessage} className="w-1/2 flex flex-col gap-5">
                        <span className="">Name*</span>
                        <input type="text" placeholder="Your Name" required className="input input-bordered w-full" />
                        <span className="">Phone*</span>
                        <input type="number" placeholder="Your Phone Number" required className="input input-bordered w-full" />
                        <span className="">Email*</span>
                        <input type="email" placeholder="Your Email" value={user?.email} readOnly required className="input input-bordered w-full" />
                        <span className="">Message*</span>
                        <textarea className="textarea textarea-bordered h-28 resize-none w-full" required placeholder="Your Message"></textarea>
                        <button className="btn btn-primary"> <BsFillSendFill/> Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;