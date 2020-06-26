import React from "react";
import {ReactComponent as Logo} from '../../assets/github.svg';
import './Footer.styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <span className='padding'>
        <a  href="https://github.com/CalumBradbury24" >
         <Logo className='dimensions'/>
        </a>
      </span>
    </div>
  );
};

export default Footer;
