'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ProfileIcon from '@/assets/icons/ProfileIcon';
import CartIcon from '@/assets/icons/CartIcon';
import MenuIcon from '@/assets/icons/MenuIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import ArrowIcon from '@/assets/icons/ArrowIcon';
import classNames from 'classnames';
import './Header.scss';

const routes = [
    {
        name: 'Home',
        path: `/`,
        dropdown: false,
    },
    {
        name: 'Features',
        path: `/features`,
        dropdown: true,
    },
    {
        name: 'Blog',
        path: `/blog`,
        dropdown: false,
    },
    {
        name: 'Shop',
        path: `/shop`,
        dropdown: false,
    },
    {
        name: 'About',
        path: `/about`,
        dropdown: false,
    },
    {
        name: 'Contact',
        path: `/contact`,
        dropdown: false,
    },
];

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isOpen);
        return () => document.body.classList.remove('no-scroll');
    }, [isOpen]);

    const navContent = () => {
        return (
            <>
                <ul className='nav__links'>
                    {routes.map((route) => {
                        const isCurrentPage = pathname === route.path;
                        return (
                            <li key={route.name}>
                                <Link
                                    className={classNames('nav__link', {
                                        'font-semibold': isCurrentPage,
                                    })}
                                    href={route.path}
                                    aria-current={isCurrentPage ? 'page' : undefined}
                                >
                                    {route.name}
                                    {route.dropdown && <ArrowIcon />}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className='nav__icons'>
                    <Link className='nav__icon' href='/account'>
                        <ProfileIcon />
                    </Link>
                    <Link className='nav__icon' href='/cart'>
                        <CartIcon />
                    </Link>
                </div>
            </>
        );
    };

    const showMobileMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <header className='header'>
            <div className='header__container'>
                <Link className='header__logo' href='/'>
                    Logo Here
                </Link>
                <nav className='header__nav' role='navigation'>
                    {navContent()}
                </nav>
                <button
                    className='header__menu-btn'
                    onClick={showMobileMenu}
                    aria-label='Open menu'
                >
                    <MenuIcon />
                </button>
            </div>

            <div
                className={classNames('header__overlay', { 'header__overlay--open': isOpen })}
                aria-hidden={!isOpen}
            >
                <div
                    className={classNames('header__content', {
                        'header__content--open': isOpen,
                    })}
                >
                    <div className='flex justify-between items-center'>
                        <Link href='/' className='header__logo'>
                            Logo Here
                        </Link>
                        <button onClick={showMobileMenu} aria-label='Close menu'>
                            <CloseIcon />
                        </button>
                    </div>
                    <nav className='header__nav--mobile' role='navigation'>
                        {navContent()}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
