import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className='flex'>
            <div className='footerdiv flex'>
                <h2>made by me</h2>
                <ul className='footerul flex'>
                    <li><Link rel="stylesheet" href="" />Home</li>
                    <li><Link rel="stylesheet" href="" />About</li>
                    <li><Link rel="stylesheet" href="" />Project</li>
                    <li><Link rel="stylesheet" href="" />contacts</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
