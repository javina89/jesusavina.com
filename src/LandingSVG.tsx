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

    const sceneSVG = <motion.svg className="absolute inset-x-0 bottom-0" viewBox="0 0 1669 1242"><path id="NorthWater" d="M1.042,29.83c263.609,-23.848 541.234,-34.124 833.333,-10.019c281.396,-31.32 559.06,-20.315 833.333,10.019l0,200.378l-1666.67,0" fill="#01f"/><rect id="Grass" x="1.042" y="230.208" width="1666.67" height="677.083" fill="#4b9e00"/><g id="Road"><rect x="1.042" y="417.708" width="1666.67" height="229.167" fill="#2e2e2e"/><rect x="32.292" y="521.875" width="145.833" height="20.833" fill="#fff"/><rect x="323.958" y="521.875" width="145.833" height="20.833" fill="#fff"/><rect x="615.625" y="521.875" width="145.833" height="20.833" fill="#fff"/><rect x="907.292" y="521.875" width="145.833" height="20.833" fill="#fff"/><rect x="1198.96" y="521.875" width="145.833" height="20.833" fill="#fff"/><rect x="1490.63" y="521.875" width="145.833" height="20.833" fill="#fff"/></g><rect id="Sand" x="1.042" y="823.958" width="1666.67" height="250" fill="#e5ac7c"/><path id="SouthWater" d="M1.042,1040.25c263.609,-23.848 541.234,-34.125 833.333,-10.019c281.396,-31.32 559.06,-20.316 833.333,10.019l0,200.378l-1666.67,0" fill="#01f"/></motion.svg>

    return (
        <div className="max-w-xs">
            {sceneSVG}
        </div>
        )
}

export default LandingSVG