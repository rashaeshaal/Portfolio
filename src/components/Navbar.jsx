import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: 'Home', href: '#hero' },
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Experience', href: '#experience' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    RASHA<span>.</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-nav-menu"
                    >
                        <div className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="mobile-nav-link"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
