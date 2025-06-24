import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="md:grid grid-cols-2 text-neutral-content">
        <div className="bg-secondary sm:p-16 p-5 text-center">
          <div className="mb-5 flex justify-center items-end ">
            <span className="font-semibold text-lg -ml-2 -mb-1 text-neutral-300">
              @meherab
            </span>
          </div>

          <h3 className="text-primary uppercase font-semibold text-xl tracking-widest mb-3">
            MERN Developer
          </h3>
          <p className="text-sm lg:px-10 md:px-5 sm:px-20 xs:px-5">
            Introduce myself as a dedicated MERN developer. Creating compelling
            eye-catchy web pages and delivering excellent user experience is my
            first objective.
          </p>
        </div>
        <div className="bg-black-100 sm:p-16 p-5 text-center">
          <h2 className="font-medium text-lg mb-5 text-primary">
            Contact Info
          </h2>
          <div className="text-sm">
            <p className="mb-2">Address: Kuril, Dhaka, Bangladesh</p>
            <p className="mb-2">Phone No: +88 01758 677391</p>
            <p>Email: meherabm803@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-5 sm:my-5 my-3">
            <div className={`${styles.bannerIcon} icon-shadow`}>
              <a
                href="https://www.linkedin.com/in/meherab-eyad/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className={`${styles.bannerIcon} icon-shadow`}>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
            <div className={`${styles.bannerIcon} icon-shadow`}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className={`${styles.bannerIcon} icon-shadow`}>
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noreferrer"
              >
                <FaBehance className="" />
              </a>
            </div>
            <div className={`${styles.bannerIcon} icon-shadow`}>
              <a
                href="https://github.com/Meherab151175"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 mt-5">
            {/* <Link to="/"><FaFacebookF /></Link>
                        <Link to="/"><FaInstagram /></Link>
                        <Link to="/"><FaTwitter /></Link> */}
          </div>
        </div>
      </div>
      <div className="footer p-4 bg-black text-white text-center">
        <div>
          <p>Copyright © 2025 - Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
