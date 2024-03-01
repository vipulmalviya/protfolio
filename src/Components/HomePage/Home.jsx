import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import Button from '../Button/Button'
import ButtonSec from '../Button/ButtonSec'
import Cursor from '../cursor/cursor'
import HomeAnim from '../Animation/HomeAnim'
import { Link } from 'react-router-dom'
import gsap from 'gsap'



const Home = () => {

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.pashtion_wrapper1', {
      left: 0, 
      opacity: 1, 
      duration: 3, 
      ease: 'power3.inOut', 
    },"a").to('.pashtion_wrapper2', {
      right: 0, 
      opacity: 1, 
      duration: 3, 
      ease: 'power3.inOut', 
    },"a").to('.btns', {
      top: 0, 
      opacity: 1, 
      duration: 3, 
      ease: 'power3.inOut', 
    },"a");
  }, []);



  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

  }, [])


  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState("undefined");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const parallaxAmountx = 50;
  const parallaxAmounty = 50;

  const imageStyle = {
    transform: `translate(${position.x/ parallaxAmountx}px, ${position.y / parallaxAmounty}px)`,
  };

  return (
    <>
      <HomeAnim />
      <div className='cursordiv'>
        <Cursor hover={isHovered2} />
      </div>
      <section className='homePage flex' >
        <div className="container flex" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
          <div className='center flex'>
            <h3 className='intro'>👋,my name is Bazil and i am a freelance</h3>
            <div className='pashtion_wrapper1 flex'>
              <Link className={`pashtion1 ${isHovered ? "" : "color"}`} to="">Webdesigner</Link>
              <Link className={`pashtion_outline ${isHovered ? "" : "outline"}`} to="">Webdesigner</Link>
            </div>
            <div className='pashtion_wrapper2 flex' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link className={`pashtion2 ${isHovered ? "color" : ""}`} to="">&WebDevloper</Link>
              <Link className={`pashtion_outline ${isHovered ? "outline" : ""}`} to="">&WebDevloper</Link>
            </div>
            <div className="location flex">
              <div className="cityName">based in Paris, France.</div>
              <div className="brandName">
                logos.....
              </div>
            </div>
            <div className='flex btns '>
              <Button>You need a webDesigner</Button>
              <ButtonSec>You need webDevloper</ButtonSec>
            </div>
          </div>
          <div className='authorImg'>
            <img style={imageStyle} width={"100%"} height={"100%"} src="images/627a6ebf32659497910541fb_Photo_profil2-p-800.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
