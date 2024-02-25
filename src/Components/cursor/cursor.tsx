import React, { useEffect, useState } from 'react'
import "./cursor.css"
const cursor = ({ hover }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

    }, [])


    return (
        <div className={`cursor flex ${hover ? "cursorhover" : ""}`} style={{
            left: `${position.x - 40}px`,
            top: `${position.y - 40}px`,
        }}>
            <img src="public/images/61fa5ae131de253e0d866d9b_Arrow.webp" alt="cursor" />

        </div>
    )
}

export default cursor
