import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router';

const CheckoutForm = ({ courseTitle, price, setShowPayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            const existingCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || [];
            localStorage.setItem('purchasedCourses', JSON.stringify([...existingCourses, courseTitle]));
            alert(`Payment for ${courseTitle} successful!`);
            navigate('/my-course'); // Redirect to the "My Courses" page after successful payment
        } else {
            console.error('Error processing payment:', error);
            alert('Payment failed. Please try again.');
        }
    };

    // Cancel function to hide the payment form without navigating away
    const handleCancel = () => {
        setShowPayment(false); // Close the payment modal/form
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold">Course: {courseTitle}</h3>
            <p className="text-gray-600">Price: ${price}</p>
            <CardElement className="p-2 border rounded" />
            <div className="flex space-x-4">
                <button
                    type="submit"
                    disabled={!stripe}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Pay ${price}
                </button>
                <button
                    type="button"
                    onClick={handleCancel}
                >
                    <span className=" relative bottom-48 left-80 ">❌</span>
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
