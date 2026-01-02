import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Rasha E. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
