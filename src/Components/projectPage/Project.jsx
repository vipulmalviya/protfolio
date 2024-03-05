import React, { useEffect } from 'react'
import "./Project.css"
import Button from '../Button/Button'
import ButtonSec from '../Button/ButtonSec'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import OutherAnim from '../Animation/OutherAnim'



const pdata = [
    {
        imgUrl: "images/627a6ebf32659497910541fb_Photo_profil2-p-800.webp",
        type: "demo1",
        title: "firest",
    },
    {
        imgUrl: "images/6450c451bb77671ff3e9a68d_Webdesign - 06-1.webp",
        type: "demo1",
        title: "second",
    },
    {
        imgUrl: "images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp",
        type: "demo1",
        title: "third",
    },
    {
        imgUrl: "images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp",
        type: "demo1",
        title: "fourth",
    },
    {
        imgUrl: "images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp",
        type: "demo1",
        title: "five",
    },
    {
        imgUrl: "images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp",
        type: "demo1",
        title: "six",
    },


]


gsap.registerPlugin(ScrollTrigger);
const Project = () => {

    return (
        <>
            <OutherAnim />
            <section className='projectPage flex'>
                <div className="container flex">
                    <div className="projectLeft flex">
                        <h3 className="work">PHOTOS</h3>
                        <h2 className='hadding'>Your brand image <br /> is in safe hands.</h2>
                        <p>As a photographer specialised in brand content and events, I <br /> cover all your needs and deliver your photos within 48 hours!</p>
                        <div className='pBtn flex' >
                            <Button>Contact me</Button>
                            <ButtonSec> Follow me on instagram</ButtonSec>
                        </div>
                    </div>
                    <div className="project">
                        <div className="pCardContainer">
                            {pdata.map((elem, i) => {
                                const { imgUrl, title, type } = elem
                                return (<div className="pCardBody" key={i}>
                                    <img src={imgUrl} alt="" />
                                    <div className='pCardDetails'>
                                        <h4>{type}</h4>
                                        <h3>{title}</h3>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project
