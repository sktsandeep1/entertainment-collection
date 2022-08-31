import React, { useState } from "react";
import "./Footer.css";
import FooterContent from "./footer-content/footerContent.json";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Footer = () => {
  const [popup, setPopup] = useState(0);

  const togglePopup = (id) => {
    setPopup(id);
  };

  return (
    <>
      <div className="container">
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
          <div className="footerItem">
            {FooterContent.map((footerContent, index) => {
              return (
                <div key={index}>
                  <div onClick={() => togglePopup(footerContent.id)}>
                    <p>{footerContent.title}</p>
                  </div>

                  {popup === footerContent.id && (
                    <div className="popup">
                      <div className="popupWindow"></div>
                      <div className="popupContent">
                        <h1>{footerContent.title}</h1>
                        <article>{footerContent.desc}</article>
                        <button
                          className="close-popup"
                          onClick={() => togglePopup(0)}
                        >
                          <GrClose />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="websiteDetails">
            <h1>Something about website</h1>
            <article>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              iure fugit sunt consequatur officia sed repellendus tempora rerum
              porro dolore quibusdam aut, iusto voluptas blanditiis odit facere
              modi repellat perferendis totam tempore optio vitae iste.
              Doloribus ipsum, accusamus aliquam sequi mollitia suscipit rerum
              sunt itaque saepe, minus aliquid numquam minima?
            </article>
          </div>
        </div>
      </div>{" "}
      <div className="bottom-footer">
        <p> All rights has been reserved</p>
      </div>
    </>
  );
};

export default Footer;
