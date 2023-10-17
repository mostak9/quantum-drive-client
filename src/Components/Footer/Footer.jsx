import logoWhite from '../../assets/logo_white.png';
import logoBlack from '../../assets/logo_black.png';
import PropTypes from "prop-types";

const Footer = ({theme}) => {
    const [isDark] = theme;
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
    <aside>
      <img src={isDark ? logoWhite : logoBlack} className='w-52' alt="" />
      <p><br/>Providing reliable tech since 1992 <br />
      Copyright © 2023 - All right reserved
      </p>
    </aside> 
    <nav>
      <header className="footer-title">Services</header> 
      <a className="link link-hover">Branding</a> 
      <a className="link link-hover">Design</a> 
      <a className="link link-hover">Marketing</a> 
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a> 
      <a className="link link-hover">Contact</a> 
      <a className="link link-hover">Jobs</a> 
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <header className="footer-title">Legal</header> 
      <a className="link link-hover">Terms of use</a> 
      <a className="link link-hover">Privacy policy</a> 
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  );
};
Footer.propTypes = {
    theme: PropTypes.array.isRequired,
  };

export default Footer;
