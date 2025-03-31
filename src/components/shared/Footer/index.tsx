'use client';

import Link from 'next/link';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import MailIcon from '@/assets/icons/MailIcon';
import PinIcon from '@/assets/icons/PinIcon';
import './Footer.scss';

const Footer = () => {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Data was sent');
    };

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <Link href='/' className='footer__logo'>
                    Logo Here
                </Link>
                <hr className='footer__divider' />
                <div className='footer__content flex flex-wrap'>
                    <div className='footer__contacts'>
                        <h5 className='contacts__title font-semibold'>Reach us</h5>
                        <div className='contacts__list flex flex-col'>
                            <Link
                                className='contacts__item contacts__item--clickable'
                                href='tel:+10123456789'
                                aria-label='Call +1012 3456 789'
                            >
                                <PhoneIcon /> +1012 3456 789
                            </Link>
                            <Link
                                className='contacts__item contacts__item--clickable'
                                href='mailto:demo@gmail.com'
                                aria-label='Send an email to demo@gmail.com'
                            >
                                <MailIcon /> demo@gmail.com
                            </Link>
                            <address className='contacts__item'>
                                <PinIcon aria-hidden='true' /> 132 Dartmouth Street Boston,
                                Massachusetts 02156 United States
                            </address>
                        </div>
                    </div>
                    <div className='footer__menu'>
                        <h5 className='menu__title'>Company</h5>
                        <div className='menu__list'>
                            <Link className='menu__item' href='/about'>
                                About
                            </Link>
                            <Link className='menu__item' href='/contact'>
                                Contact
                            </Link>
                            <Link className='menu__item' href='/blog'>
                                Blogs
                            </Link>
                        </div>
                    </div>
                    <div className='footer__menu'>
                        <h5 className='menu__title'>Legal</h5>
                        <div className='menu__list'>
                            <Link className='menu__item' href='/privacy-policy'>
                                Privacy Policy
                            </Link>
                            <Link className='menu__item' href='/terms'>
                                Terms & Services
                            </Link>
                            <Link className='menu__item' href='/terms-of-use'>
                                Terms of Use
                            </Link>
                            <Link className='menu__item' href='/refund-policy'>
                                Refund Policy
                            </Link>
                        </div>
                    </div>
                    <div className='footer__menu'>
                        <h5 className='menu__title'>Quick Links</h5>
                        <div className='menu__list'>
                            <Link className='menu__item' href='/techlabz-keybox'>
                                Techlabz Keybox
                            </Link>
                            <Link className='menu__item' href='/downloads'>
                                Downloads
                            </Link>
                            <Link className='menu__item' href='/forum'>
                                Forum
                            </Link>
                        </div>
                    </div>
                    <div className='footer__subscription flex flex-col'>
                        <h5 className='subscription__title font-semibold'>Join Our Newsletter</h5>
                        <form
                            onSubmit={(e) => onSubmit(e)}
                            className='subscription__form flex w-full'
                        >
                            <input
                                id='email'
                                placeholder='Your email address'
                                className='subscription__input'
                            />
                            <button
                                type='submit'
                                className='subscription__button font-medium'
                                aria-label='Subscribe to the newsletter'
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className='subscription__note'>
                            * Will send you weekly updates for your better tool management.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
