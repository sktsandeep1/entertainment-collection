import React, { useState } from "react";
import "./Footer.css";
import FooterContent from "./footer-content/footerContent.json";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Footer = () => {
  const [popup, setPopup] = useState();

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <>
      <div className="footer-container">
        <div className="sub-footer-1">
          <div className="socials">
            <FaFacebookF className="social-item" />
            <FaTwitter className="social-item" />
            <FaLinkedinIn className="social-item" />
            <FaDiscord className="social-item" />
          </div>
          <div className="footer-logo">
            <h1>Entertainment Collection</h1>
          </div>
        </div>

        <div className="sub-footer-2">
          {FooterContent.map((footerContent) => {
            return (
              <>
                <div className="" onClick={togglePopup}>
                  <p>{footerContent.title}</p>
                </div>

                {popup && (
                  <div className="popup">
                    <div className="popupWindow"></div>
                    <div className="popupContent">
                      <h1>{footerContent.title}</h1>
                      <p>{footerContent.desc}</p>
                      <button className="close-popup" onClick={togglePopup}>
                        <GrClose />
                      </button>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>

        <div className="bottom-footer">
          <p> All rights has been reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
