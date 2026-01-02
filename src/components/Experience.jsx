import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                <div className="timeline">
                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="role">{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                    <span className="duration">{exp.duration}</span>
                                </div>
                                <ul className="timeline-list">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
