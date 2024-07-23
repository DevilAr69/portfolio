"use client"

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
function About() {
  const boxRef = React.useRef(null);
  useEffect(() => {
    
    gsap.to(boxRef.current, {
      delay:1,
      
      y:-80,
      duration:2,
    
    })
  }, []);
    
  return (
    <div className="flex  h-auto p-3  justify-center w-full text-black ">
      <div>
        <h1 className="text-9xl pt-4 text-center">About</h1>
        <div className="flex flex-row gap-8 pt-6">
          <img ref={boxRef}
            className="h-[450px]   w-auto rounded-full "
            src="./images/profile2.png"
            alt=""
          />
          <p className="font-regular flex   align-middle items-center  leading-10 text-2xl font-regular ">
            Hello, I'm Aryan, a full-stack developer with a passion for
            continuous learning and professional growth. While my foundation
            lies in the MERN stack, I am actively exploring advanced topics in
            web development such as performance optimization, serverless
            architectures, and progressive web apps (PWAs). <br /> <br /> My goal is to stay
            at the forefront of web technologies and contribute to innovative
            projects that make a difference. I thrive in collaborative
            environments where I can both contribute to team success and learn
            from experienced professionals. If you’re looking for a dedicated
            web developer with a strong foundation and a zeal for learning,
            let’s connect!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
