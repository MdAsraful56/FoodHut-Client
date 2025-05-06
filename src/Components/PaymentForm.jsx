import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
// import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const PaymentForm = () => {

    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.price); // or Number(item.price)
        return total + (isNaN(price) ? 0 : price);
    }, 0);


    useEffect( () => {
        axiosPublic.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log('clientSecret', res.data.clientSecret);
                setClientSecret(res.data.clientSecret);

            })
    } ,[axiosPublic, totalPrice])

    console.log("Total price:", totalPrice);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error('[Payment error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            // Here you can send the paymentMethod.id to your server to process the payment
            setError(null);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'unknown',
                }
            }
        });

        if (confirmError) {
            console.log('confirmError', confirmError);
            setError(confirmError.message);
        } else {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction complete', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                Swal.fire({
                    title: `Payment Completed !`,
                    icon: "success",
                    draggable: true
                });
                refetch();
                // Save payment information to the server
                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),
                    cartItems: cart.map(item => item._id),
                    status: 'service pending',
                    foodItemIds: cart.map(item => item.foodId)
                }
                console.log('Payment data:', payment);
                axiosPublic.post('/payments', payment)
                    .then(res => {
                        console.log('Payment save ', res.data)
                    })
            }
        }
}

console.log("Client secret:", clientSecret); // should look like "pi_..._secret_..."


    return (
        <div>
            <div className="text-center my-5">
                <h2 className="text-3xl font-semibold">Total Amount: ${totalPrice}</h2>
                <p className="text-sm text-gray-500">Please pay for your order</p>
            </div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button className='btn btn-sm btn-primary my-5 ' type="submit" disabled={ !stripe || !totalPrice }>Pay</button>
                <div className="mt-10 flex flex-col items-center">
                    {error && <p className='text-red-500'>{error}</p>}
                    {transactionId && <p className='text-green-500'>Transaction complete with transactionId: {transactionId}</p>}
                </div>
                
            </form>
        </div>
    );
};

export default PaymentForm;