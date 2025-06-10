// GsapMarquee.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';
import Marquee from 'react-fast-marquee';
import "./Body-container.css";

gsap.registerPlugin(ScrollTrigger);

const GsapMarquee = () => {
  const textRef = useRef();

  useEffect(() => {
    gsap.to(textRef.current, {
      x: -1000,
      ease: 'none',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="scroll-container" >
      <div className="scroll-text" ref={textRef} >
      <Marquee gradient={true} speed={80} loop={0}>
       <span  style={{ marginRight: '3rem', fontSize:"30px" }}> • software developers • interview practise • Developers • Students • recruiters • Knowledge Workers • Polymaths • Developers • Students • Researchers •recruiters • Polymaths • Developers • Students • Researchers  • Polymaths • Developers • Students • Researchers </span>
        </Marquee>
      </div>
    </div>
  );
};

export default GsapMarquee;
