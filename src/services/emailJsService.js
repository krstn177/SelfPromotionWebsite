import emailjs from "@emailjs/browser";
import { purchase } from "../config/metaPixel";

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const orderTemplate = import.meta.env.VITE_EMAIL_ORDER_TEMPLATE;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const responseTemplate = import.meta.env.VITE_EMAIL_RESPONSE_TEMPLATE;

function sendConfirmationEmail(order, price){
    emailjs.send(serviceId, responseTemplate, order, {
            publicKey: publicKey
        }).then((response) => {
            console.log('Confirmation Sent!', response.status);
            purchase(order.count * price);
        }, (error) => {
            console.log('Confirmation email failed:', error);
        });
}

export function sendOrderEmail(order, price, setIsLoading, setIsSuccessful, setHasOrdered) {
    emailjs.send(serviceId, orderTemplate, order, {
        publicKey: publicKey
    }).then(
        (response) => {
            setTimeout(() => {
                setIsLoading(false);
                setIsSuccessful(true);
            }, 1000);
            console.log('SUCCESS!', response.status, response.text);
            sendConfirmationEmail(order, price);
        },
        (error) => {
            setIsLoading(false);
            setIsSuccessful(false);
            setTimeout(() => {
                setHasOrdered(false);
            }, 1000);
            console.log('Order email failed:', error);
        }
    );
}