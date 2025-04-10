import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Press', path: '/press' },
                { name: 'Blog', path: '/blog' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Activities', path: '/activities' },
                { name: 'Learning Paths', path: '/learning-paths' },
                { name: 'For Teachers', path: '/teachers' },
                { name: 'For Parents', path: '/parents' },
            ],
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', path: '/help' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
            ],
        },
    ];

    const socialLinks = [
        { icon: <FiFacebook />, path: 'https://facebook.com' },
        { icon: <FiTwitter />, path: 'https://twitter.com' },
        { icon: <FiInstagram />, path: 'https://instagram.com' },
        { icon: <FiYoutube />, path: 'https://youtube.com' },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Logo and Info */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold">
                                Kid<span className="text-secondary-500">Jig</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            KidJig is an interactive learning platform designed to make education fun and engaging for children of all ages.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <FiMail className="text-gray-400 mr-3" />
                                <a href="mailto:info@kidjig.com" className="text-gray-400 hover:text-white transition-colors">
                                    info@kidjig.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FiPhone className="text-gray-400 mr-3" />
                                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                                    (123) 456-7890
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FiMapPin className="text-gray-400 mr-3" />
                                <span className="text-gray-400">
                                    123 Learning Lane, Education City, EC 12345
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-bold mb-4">{column.title}</h3>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {currentYear} KidJig. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;