import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';
import profileImg from '../assets/profile.png';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <div className="profile-photo-container">
                        <img src={profileImg} alt={data.name} className="profile-photo" />
                    </div>

                    <span className="hero-greeting">
                        Hello, I'm
                    </span>
                    <h1 className="hero-name">
                        {data.name}
                    </h1>
                    <h2 className="hero-title">
                        {data.title}
                    </h2>
                    <p className="hero-description">
                        {data.summary}
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Work
                        </a>
                        <a href="/Rashapdf.pdf" download className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            Download CV <FaDownload />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
