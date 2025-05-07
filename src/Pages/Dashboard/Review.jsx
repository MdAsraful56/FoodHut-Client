import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { BsFillSendFill } from 'react-icons/bs';
// import { AuthContext } from '../../Providers/AuthProvider';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Review = () => {

    // const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [rating, setValue] = useState(0);


    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form[0].value;
        const details = form.details.value;
        
        // const message = form[2].value;
        const reviewData = { name, rating, details };
        console.log(reviewData);
        axiosPublic.post('/reviews', reviewData) 
            .then(res => {
                if (res.data.insertedId) {
                    // alert('Review added successfully!');
                    Swal.fire({
                        title: "Review added successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.error(err);
            });

    }

    return (
        <div>
            <SectionTitle heading={'Give a Review'} subHeading={'Share Your Experience'} />
            <section className="">
                <div className="flex justify-center items-center my-10">
                    <form onSubmit={handleReview} className="w-1/2 flex flex-col gap-5">
                        <span className="">Name*</span>
                        <input type="text" placeholder="Your Name" required className="input input-bordered w-full" />
                        <Box sx={{ '& > legend': { mt: 2 } }}>
                            <Rating name="simple-controlled" value={rating} 
                                onChange={(event, newValue) => {setValue(newValue);}}/>
                        </Box>
                        <span className="">Message*</span>
                        <textarea name='details' className="textarea textarea-bordered h-28 resize-none w-full" required placeholder="Your Message"></textarea>
                        <button className="btn btn-primary"> <BsFillSendFill/> Review</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Review;