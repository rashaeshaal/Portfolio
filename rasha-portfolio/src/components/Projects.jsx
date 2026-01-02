import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.link !== '#' && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                    {/* Assuming we might add github links to data later */}
                                    <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
