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

    const sceneSVG = <motion.svg className="absolute inset-x-0 bottom-0" viewBox="0 0 3339 3311"><path id="NorthWater" d="M2.406,79.175c527.218,-63.595 1082.47,-90.999 1666.67,-26.717c562.792,-83.521 1118.12,-54.175 1666.67,26.717l-0,534.342l-3333.33,-0" fill="#01f"/><rect id="Grass" x="2.406" y="613.517" width="3333.33" height="1805.56" fill="#4b9e00"/><g id="Road"><rect x="2.406" y="1113.52" width="3333.33" height="611.111" fill="#2e2e2e"/><rect x="64.906" y="1391.3" width="291.667" height="55.556" fill="#fff"/><rect x="648.239" y="1391.3" width="291.667" height="55.556" fill="#fff"/><rect x="1231.57" y="1391.3" width="291.667" height="55.556" fill="#fff"/><rect x="1814.91" y="1391.3" width="291.667" height="55.556" fill="#fff"/><rect x="2398.24" y="1391.3" width="291.667" height="55.556" fill="#fff"/><rect x="2981.57" y="1391.3" width="291.667" height="55.556" fill="#fff"/></g><rect id="Sand" x="2.406" y="2196.85" width="3333.33" height="666.667" fill="#e5ac7c"/><path id="SouthWater" d="M2.406,2773.62c527.218,-63.595 1082.47,-90.998 1666.67,-26.717c562.792,-83.521 1118.12,-54.174 1666.67,26.717l-0,534.342l-3333.33,0" fill="#01f"/></motion.svg>

    return (
        <div className="max-w-xs">
            {sceneSVG}
        </div>
        )
}

export default LandingSVG