import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className='flex flex-col justify-center items-center p-20 bg-muted'>
            <div className='flex gap-5 mb-4 justify-center align-items-center'>
                <Link href="https://facebook.com" target="_blank" className='text-muted-foreground' >
                    <FaFacebook />
                </Link>
                <Link href="https://twitter.com" target="_blank" className='text-muted-foreground'>
                    <FaTwitter />
                </Link>
                <Link href="https://instagram.com" target="_blank" className='text-muted-foreground'>
                    <FaInstagram />
                </Link>
            </div>
            <p className='text-xs'>© 2023 Your Company. All rights reserved.</p>
        </footer>
    );
};


export default Footer;