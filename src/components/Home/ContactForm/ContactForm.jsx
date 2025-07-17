import styles from './ContactForm.module.css';

import { Form, Button, FloatingLabel, Spinner } from "react-bootstrap";

import {useState} from 'react';
import { useForm } from 'react-hook-form';
import { sendQuestionEmail } from '../../../services/emailJsService';

export const ContactForm = () => {
  const [hasAsked, setHasAsked] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm({
    mode: "onTouched",
    defaultValues:{
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:'',
      question:'',
      agreed: false
  }});

  const onSubmitHandler = async (data) => {
    setHasAsked(true);
    setIsLoading(true);
    delete data.agreed;

    const inquiry = {
        ...data
    };
    
    sendQuestionEmail(inquiry, setIsLoading, setIsSuccessful, setHasAsked);
  }
  return (
    <>
        {
        !hasAsked && 
        <div id="question-form" className={styles.ContactSection}>
            <h2 className={styles.title}>НАПРАВЕТЕ ЗАПИТВАНЕ</h2>
            <Form className={styles.order} onSubmit={handleSubmit(onSubmitHandler)}>

                <Form.Group>
                    <FloatingLabel label="Имейл" className="mt-3">
                        <Form.Control name="email" type="text" placeholder="Вашият имейл"
                            {...register("email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} 
                        />
                    </FloatingLabel>
                    </Form.Group>
                    {errors.email &&  
                    <div>
                        <Form.Text className={styles.alertText}>
                        Невалиден email
                        </Form.Text>                        
                    </div>         
                    }
                
                <Form.Group>
                    <FloatingLabel label="Телефонен номер" className="mt-3">
                        <Form.Control name="phoneNumber" type="text" placeholder="Вашият телефонен номер"
                        {...register("phoneNumber", { required: true, pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ })}
                        />
                    </FloatingLabel>
                </Form.Group>
                {errors.phoneNumber &&  
                    <div>
                    <Form.Text className={styles.alertText}>
                       Невалиден телефонен номер
                    </Form.Text>                        
                    </div>         
                }

                <Form.Group>
                  <FloatingLabel label="Вашето запитване" className="mt-3">
                    <Form.Control as="textarea" rows={4} name="question" type="text" placeholder="Направете запитване"
                      {...register("question", { required: true, minLength: 10, maxLength: 500 })}
                    />
                  </FloatingLabel>
                </Form.Group>
                {errors.question &&  
                    <div>
                        <Form.Text className={styles.alertText}>
                            Дължината на адреса трябва да е между 10 и 500 символа
                        </Form.Text>
                    </div>
                }

                <Form.Group className="mt-3">
                    <Form.Check 
                    name="agreed" 
                    className={styles.txtEtc} 
                    type="checkbox" 
                    label="Условията на сайта са ми ясни и съм съгласен с тях"
                    {...register("agreed", {required: true})}
                    />
                </Form.Group>
                {errors.agreed &&  
                    <div>
                        <Form.Text className={styles.alertText}>
                            Това поле е задължително
                        </Form.Text>                        
                    </div>         
                }
                <Button className={[styles.createSubmitBtn, "mt-3"]} type="submit">
                    Изпрати запитване
                </Button>
            </Form>
        </div>  
        }
        {
        hasAsked && 
        <div className={styles.alertDiv}>
            {
                (!isLoading && isSuccessful) && 
                <>
                    <img className={styles.responseImg} src="/images/success.webp" alt="success" />
                </>
            }
            {
                (!isLoading && !isSuccessful) && 
                <>
                    <img className={styles.responseImg} src="/images/error.png" alt="error" />
                </>
            }
            {
                isLoading && 
                <Spinner className={styles.spinner} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </div>
        }
    </>
  )
}

