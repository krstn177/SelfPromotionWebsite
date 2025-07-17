import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const questionTemplate = import.meta.env.VITE_EMAIL_QUESTION_TEMPLATE;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export function sendQuestionEmail(inquiry, setIsLoading, setIsSuccessful, setHasAsked) {
    emailjs.send(serviceId, questionTemplate, inquiry, {
        publicKey: publicKey
    }).then(
        (response) => {
            setTimeout(() => {
                setIsLoading(false);
                setIsSuccessful(true);
            }, 1000);
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            setIsLoading(false);
            setIsSuccessful(false);
            setTimeout(() => {
                setHasAsked(false);
            }, 1000);
            console.log('Email failed to send:', error);
        }
    );
}