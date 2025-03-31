import Link from 'next/link';
import { PropsWithChildren } from 'react';

type SocialLinkProps = PropsWithChildren & {
    href: string;
    className?: string;
};

const SocialLink = ({ href, children, className = '' }: SocialLinkProps) => {
    return (
        <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Social media link'
            className={`group flex items-center justify-center rounded-full w-[30px] h-[30px] bg-[#1B1B1B] transition-all duration-200 hover:bg-[#2e2e2e] active:bg-white ${className}`}
        >
            <span className='text-white transition-all duration-200 group-active:text-black'>
                {children}
            </span>
        </Link>
    );
};

export default SocialLink;
