import { motion } from "framer-motion";
import { Reveal } from "react-awesome-reveal";
import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Meherab from "../assets/Meherab-2.png";
import { styles } from "../styles";
import "./style.css";

const Hero = () => {
  return (
    <section className="relative w-full sm:h-screen h-[850px] overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] mx-auto  flex sm:flex-row flex-col gap-16 items-center sm:justify-between sm:mb-20`}
      >
        <Reveal triggerOnce cascade direction="left">
          <div className="flex sm:items-center gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-primary" />
              <div className="w-1 h-72 bg-gradient-to-b from-primary" />
            </div>
            <div>
              <h3 className={`${styles.bannerHeadText}`}>Hi, It&apos;s me, </h3>
              <h1 className={`${styles.heroHeadText} `}>Meherab Hossain</h1>
              <h2 className={`${styles.orangeHeader}`}>
                I&apos;m a{" "}
                <TypeAnimation
                  sequence={["Developer", 1000, "Designer", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className={`${styles.heroSubText} text-gray-300`}>
                I currently working on MERN stack web development,{" "}
                <br className="sm:block hidden" /> and connected with Web
                Development field since 2020.
              </p>
              <div className="flex items-center gap-5 sm:my-5 my-3">
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
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                    href="https://www.behance.net/"
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
              <div className={`${styles.shadowButton} shadowButton`}>
                <a
                  className="px-8"
                  href="https://docs.google.com/document/d/1x2apBulLs6LRMYHHJEcmMr2tchRUWYD6JFGO0TUo72s/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal triggerOnce>
          <div>
            <img
              className="h-80 sm:mt-10 rounded-full border-4  outline-dotted outline-2 outline-primary -outline-offset-8 border-primary py-2 px-4 MeherabImage bg-slate-300 bg-opacity-60"
              src={Meherab}
              alt="Meherab"
            />
          </div>
        </Reveal>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full sm:flex justify-center items-center sm:visible hidden">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-neutral flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-neutral mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
