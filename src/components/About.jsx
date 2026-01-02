import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <p className="about-text">
                            {data.summary}
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">1+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
