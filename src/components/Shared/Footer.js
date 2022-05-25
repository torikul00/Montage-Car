import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-secondary text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Contact - Developer</span>
                <a target='_blank' href='https://www.facebook.com/timutorikul/' className="link link-hover">Facebook</a>
                <a target='_blank' href='https://www.linkedin.com/in/timutorikul/' className="link link-hover">Linkedin</a>
                <a target='_blank' href='https://www.instagram.com/?hl=en' className="link link-hover">Instagram</a>
                <a target='_blank' href='https://www.youtube.com/channel/UCadEO1uyZBF3n4Az_3PPpIw' className="link link-hover">YouTube</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <span>Copyright - Torikul Islam</span>
                <span>Address : Enayetpur , Sirajgonj , Bangladesh </span>
                <span>Phone : 01971093582</span>
               
            </div>
        </footer>
    );
};

export default Footer;