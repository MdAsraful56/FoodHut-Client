import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../../Components/PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const options = {
    wallets: {
      link: 'never',  // 👈 disables the Link autofill feature
    },
};

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={'Please pay for your order'} />
            <div className="mx-5">
                <Elements stripe={stripePromise} options={options}>
                    <PaymentForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;