import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="skills-grid">
                        {data.skills.map((category, index) => (
                            <motion.div
                                key={index}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="skill-category">{category.category}</h3>
                                <div className="skill-tags">
                                    {category.items.map((item, idx) => (
                                        <span key={idx} className="skill-tag">{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
