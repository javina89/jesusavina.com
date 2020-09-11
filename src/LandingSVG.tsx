import React, { useEffect, useRef, useContext } from 'react'
import {ThemeContext, autoTheme} from './themeContext'
import { motion } from "framer-motion"

const LandingSVG = () => {


    const {theme, toggleTheme} = useContext(ThemeContext)


    const biking = () => {

    }

    const personPathVariants = {
        night: {
            fill:"#61DAFB"
        },
        day: {
            fill:"#2C2A37"
        },
        turnNight: {
            fill:"#61DAFB",
            transition:{ 
                fill: {duration: .2},
            }
        },
        turnDay: {
            fill:"#2C2A37",
            transition:{ 
                fill: {duration: .2},
            }
        }
    }

    const sceneSVG = <motion.svg className="absolute inset-x-0 bottom-0" viewBox="0 0 835 415"><path id="NorthWater" d="M0.425,10.021c131.805,-7.949 270.617,-11.374 416.667,-3.339c140.698,-10.44 279.53,-6.772 416.667,3.339l-0,66.793l-833.334,0" fill="#01f"/><rect id="Grass" x="0.425" y="76.814" width="833.333" height="225.694" fill="#4b9e00"/><g id="Road"><rect x="0.425" y="139.314" width="833.333" height="76.389" fill="#2e2e2e"/><rect x="16.05" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="161.884" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="307.717" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="453.55" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="599.384" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="745.217" y="174.036" width="72.917" height="6.944" fill="#fff"/></g><rect id="Sand" x="0.425" y="274.731" width="833.333" height="83.333" fill="#e5ac7c"/><path id="SouthWater" d="M0.425,346.827c131.805,-7.949 270.617,-11.375 416.667,-3.34c140.698,-10.44 279.53,-6.772 416.667,3.34l-0,66.793l-833.334,-0" fill="#01f"/></motion.svg>

    return (
        <div className="max-w-xs">
            {sceneSVG}
        </div>
        )
}

export default LandingSVG