import React, { useState } from "react";
import { Reveal } from "react-awesome-reveal";
import Meherab from "../assets/Meherab-2.png";
import { aboutMe } from "../constants/index.js";
import { styles } from "../styles";
import "./style.css";

const About = () => {
  const [fold, setFold] = useState(true);
  return (
    <section id="about" className="w-full py-28 mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} h-full grid sm:grid-cols-3 grid-cols-1 items-center justify-center sm:gap-20`}
      >
        <Reveal triggerOnce direction="left">
          <div className="sm:order-first order-last  flex items-center justify-center w-full">
            <img
              className="sm:h-72 h-60 mt-10 md:mb-0 mb-20 rounded-lg outline-4  outline-primary -outline-offset-8 outline-double border-2 border-primary p-4 pr-0 MeherabImage2"
              src={Meherab}
              alt="Meherab"
            />
          </div>
        </Reveal>
        <Reveal triggerOnce cascade direction="right">
          <div className="sm:col-span-2 flex sm:items-center gap-5">
            <div className="flex flex-col justify-center items-center sm:mt-10">
              <div className="w-5 h-5 rounded-full bg-primary" />
              <div className="w-1 h-80 bg-gradient-to-b from-primary" />
            </div>
            <div>
              <h3 className={`${styles.bannerHeadText}`}>
                Let me Introduce myself
              </h3>
              <h2 className={`${styles.orangeHeader}`}>About Me</h2>
              <h1 className={`${styles.heroHeadText} `}>Meherab Hossain</h1>

              {fold ? (
                <>
                  <div>
                    <p className="md:text-base text-sm">
                      {aboutMe.substring(0, 451)}
                    </p>
                    <div
                      className={`${styles.shadowButton} shadowButton px-8 mt-5`}
                      onClick={() => setFold(!fold)}
                    >
                      Read More
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-sm">{aboutMe.substring(0, 451)}</p>
                    <p className="text-sm">{aboutMe.substring(451, 900)}</p>
                    <div
                      className={`${styles.shadowButton} shadowButton px-8 mt-5 sm:mb-0 mb-16`}
                      onClick={() => setFold(!fold)}
                    >
                      Read Less
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
