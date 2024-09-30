import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" p-10 bg-neutral text-neutral-content">
            <div className="footer items-center max-w-7xl mx-auto">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Properties</a>
                    <a className="link link-hover">loan</a>
                    <a className="link link-hover">Rent</a>
                    <a className="link link-hover">Contract</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Social Media</h6>
                    <div className="flex flex-row gap-3">
                        <a className="link link-hover"><FaFacebookF /></a>
                        <a className="link link-hover"><FaInstagram /></a>
                        <a className="link link-hover"><FaTwitter /></a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;