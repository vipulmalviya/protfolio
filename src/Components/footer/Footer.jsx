import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className='flex'>
            <div className='footerdiv flex'>
                <h2>made by me</h2>
                <ul className='footerul flex'>
                    <li><Link rel="stylesheet" to="/About" />About</li>
                    <li><Link rel="stylesheet" to="/Project" />Project</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
