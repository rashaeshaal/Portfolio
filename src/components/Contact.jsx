import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-wrapper"
                >
                    <div className="contact-info">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="contact-text">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <span>{data.contact.phone}</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>{data.contact.location}</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin />
                            </a>
                            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-input" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" className="form-input" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
