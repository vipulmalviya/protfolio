import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className='flex'>
            <div className='footerdiv flex'>
                <h2>made by me</h2>
                <ul className='footerul flex'>
                    <li>
                        <Link to="/About" style={{color:"white"}}>About</Link>
                    </li>
                    <li>
                        <Link to="/Project" style={{color:"white"}}>Projects</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
