import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 mt-10 px-14 text-base-content">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Emergency Checkup</a>
                <a className="link link-hover">Monthly Checkup</a>
                <a className="link link-hover">Weekly Checkup</a>
                <a className="link link-hover">Deep Checkup</a>
            </div>
            <div>
                <span className="footer-title">ORAL HEALTH</span>
                <a className="link link-hover">Fluoride Treatment</a>
                <a className="link link-hover">Cavity Filling</a>
                <a className="link link-hover">Teath Whitening</a>
            </div>
            <div>
                <span className="footer-title">OUR ADDRESS</span>
                <a className="link link-hover">New York - 101010 Hudson</a>
            </div>
        </footer>
    );
};

export default Footer;