"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import './HeroSection.css';
import { gsap } from "gsap";

const HeroSection = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      opacity:2,
      
      duration: 2,
      repeat: 4,
    });
  }, []);

  return (
    <section className="lg:py-20 bg-[#E1E1E1] md:py-20 sm:py-20 h-screen pl-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#000] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-[#000] bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Aryan Seth",
                1000,
                "Web Developer",
                1000,
                "Competitive Coder",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#000] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, I'm <span className="text-yellow-500">Aryan Seth</span>, a web
            developer specializing in creating dynamic, responsive websites with
            HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
            I am passionate about writing clean, efficient code and delivering
            user-friendly web applications.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-black"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <button>
                <span className="span-mother w-auto p-2">
                  <span>D</span>
                  <span>o</span>
                  <span>w</span>
                  <span>n</span>
                  <span>l</span>
                  <span>o</span>
                  <span>a</span>
                  <span>d </span>
                  <span>C </span>
                  <span>V </span>
                </span>
                <span className="span-mother2">
                  <span>D</span>
                  <span>o</span>
                  <span>w</span>
                  <span>n</span>
                  <span>l</span>
                  <span>o</span>
                  <span>a</span>
                  <span>d </span>
                  <span>C </span>
                  <span>V </span>
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div ref={boxRef}
           
            className="prof_img rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              src="/images/profile.jpg"
              alt="hero image"
              className="prof_img absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
