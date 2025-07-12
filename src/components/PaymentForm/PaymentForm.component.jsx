import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

import { PaymentFormContainer, FormContainer } from "./PaymentForm.styles.jsx";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart.context.jsx";
import { UserContext } from "../../Context/User.context.jsx";

const PaymentForm = () => {
    const { cartTotal, clearCart } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);

    const stripe = useStripe();
    const elements = useElements();

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const displayName = currentUser?.displayName ?? "Guest";

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessingPayment(true);

        try {
            const response = await fetch(
                "/.netlify/functions/create-payment-intent",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        amount: cartTotal * 100,
                    }),
                }
            );

            const {
                paymentIntent: { client_secret },
            } = await response.json();

            const cardElement = elements.getElement(CardElement); // ✅ get reference

            const paymentResult = await stripe.confirmCardPayment(
                client_secret,
                {
                    payment_method: {
                        card: cardElement,
                        billing_details: {
                            name: displayName,
                        },
                    },
                }
            );

            setIsProcessingPayment(false);

            if (paymentResult.error) {
                alert(paymentResult.error.message);
            } else if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Payment Successful");

                clearCart(); // ✅ Clear cart
                cardElement.clear(); // ✅ Clear card form
            }
        } catch (error) {
            console.error("Payment error:", error);
            alert("Something went wrong during payment.");
            setIsProcessingPayment(false);
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                    isLoading={isProcessingPayment}
                    disabled={isProcessingPayment}
                >
                    {isProcessingPayment ? "Please wait..." : "Pay now"}
                </Button>
            </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentForm;
