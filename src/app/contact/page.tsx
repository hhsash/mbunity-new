import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import SocialLink from '@/components/SocialLink';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import MailIcon from '@/assets/icons/MailIcon';
import PinIcon from '@/assets/icons/PinIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import IntagramIcon from '@/assets/icons/IntagramIcon';
import DiscordIcon from '@/assets/icons/DiscordIcon';
import './styles.scss';

export const metadata: Metadata = {
    title: 'Contact Us',
};

const ContactPage = () => {
    return (
        <main className='contact-page'>
            <h1 className='contact-page__title text-center font-bold'>Contact Us</h1>
            <p className='contact-page__subtitle text-center'>
                Any&nbsp;question or&nbsp;remarks? Just write&nbsp;us a&nbsp;message!
            </p>
            <div className='contact-page__container flex'>
                <div className='contact-card flex flex-col relative'>
                    <div className='contact-card__header'>
                        <h3 className='contact-card__title font-semibold'>Contact Information</h3>
                        <span className='contact-card__subtitle'>
                            Say&nbsp;something to&nbsp;start a&nbsp;live&nbsp;chat!
                        </span>
                    </div>
                    <div className='contact-card__contacts flex flex-col relative'>
                        <Link
                            className='contact-card__item contact-card__item--clickable'
                            href='tel:+10123456789'
                            aria-label='Call +1012 3456 789'
                        >
                            <PhoneIcon />
                            <span>+1012 3456 789</span>
                        </Link>
                        <Link
                            className='contact-card__item contact-card__item--clickable'
                            href='mailto:demo@gmail.com'
                            aria-label='Send an email to demo@gmail.com'
                        >
                            <MailIcon />
                            <span>demo@gmail.com</span>
                        </Link>
                        <address className='contact-card__item'>
                            <PinIcon aria-hidden='true' />
                            <span>
                                132 Dartmouth Street Boston, Massachusetts 02156 United States
                            </span>
                        </address>
                    </div>
                    <div className='contact-card__socials flex relative'>
                        <SocialLink href='https://twitter.com'>
                            <TwitterIcon />
                        </SocialLink>
                        <SocialLink href='https://instagram.com'>
                            <IntagramIcon />
                        </SocialLink>
                        <SocialLink href='https://discord.com/'>
                            <DiscordIcon />
                        </SocialLink>
                    </div>
                </div>
                <div className='contact-page__form relative w-full'>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
