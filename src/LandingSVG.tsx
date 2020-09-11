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

    const sceneSVG = <motion.svg className="absolute inset-x-0 bottom-0" viewBox={`0 0 3338 2130`}><path id="NorthWater" d="M2.083,59.66c527.219,-47.696 1082.47,-68.249 1666.67,-20.037c562.792,-62.641 1118.12,-40.632 1666.67,20.037l-0,400.757l-3333.33,-0" fill="#61DAFB"/><rect id="Grass" x="2.083" y="460.417" width="3333.33" height="1000" fill="#4b9e00"/><g id="Road"><rect x="2.083" y="668.75" width="3333.33" height="458.333" fill="#2e2e2e"/><rect x="64.583" y="877.083" width="291.667" height="41.667" fill="#fff"/><rect x="647.917" y="877.083" width="291.667" height="41.667" fill="#fff"/><rect x="1231.25" y="877.083" width="291.667" height="41.667" fill="#fff"/><rect x="1814.58" y="877.083" width="291.667" height="41.667" fill="#fff"/><rect x="2397.92" y="877.083" width="291.667" height="41.667" fill="#fff"/><rect x="2981.25" y="877.083" width="291.667" height="41.667" fill="#fff"/></g><rect id="Sand" x="2.083" y="1460.42" width="3333.33" height="333.333" fill="#e5ac7c"/><path id="SouthWater" d={`M2.083,1726.33c527.219,-47.696 1082.47,-68.249 1666.67,-20.038c562.792,-62.641 1118.12,-40.631 1666.67,20.038l-0,400.756l-3333.33,0`} fill="#61DAFB"/></motion.svg>

    return (
        <div className="relative max-w-5xl">
            {sceneSVG}
        </div>
        )
}

export default LandingSVG