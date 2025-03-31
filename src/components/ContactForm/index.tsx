'use client';

import InputField from '@/components/ui/InputField';
import RadioInput from '@/components/ui/RadioInput';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const onSubmit = (e: React.FormEvent) => {
        // This is where the data should be sent to the server
        e.preventDefault();
        console.log('Data was sent');
    };

    return (
        <form className={styles.contactForm} onSubmit={(e) => onSubmit(e)}>
            <div className={styles.contactForm__inputsGroup}>
                <InputField id='name' label='First Name' />
                <InputField id='surname' label='Last Name' placeholder='Doe' />
                <InputField id='email' label='Email' />
                <InputField id='phone' label='Phone Number' />
            </div>
            <fieldset className={styles.contactForm__radioGroupWrapper}>
                <legend className={styles.radioGroup__title}>Select Subject?</legend>
                <div className={styles.radioGroup__items}>
                    <RadioInput
                        id='choice1'
                        name='subject'
                        value='General Inquiry'
                        label='General Inquiry'
                        className={styles.radioGroup__item}
                    />
                    <RadioInput
                        id='choice2'
                        name='subject'
                        value='General Inquiry'
                        label='General Inquiry'
                        className={styles.radioGroup__item}
                    />
                    <RadioInput
                        id='choice3'
                        name='subject'
                        value='General Inquiry'
                        label='General Inquiry'
                        className={styles.radioGroup__item}
                    />
                    <RadioInput
                        id='choice4'
                        name='subject'
                        value='General Inquiry'
                        label='General Inquiry'
                        className={styles.radioGroup__item}
                    />
                </div>
            </fieldset>
            <InputField label='Message' placeholder='Write your message...' />
            <button className={styles.contactForm__submitBtn} type='submit'>
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
