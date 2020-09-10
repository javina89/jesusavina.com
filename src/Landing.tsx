import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'
import { motion } from "framer-motion"
import LandingCanvas from './LandingCanvas'

const Landing = () => {

    const {theme} = useContext(ThemeContext)

    const textVariants = {
        night: {
            color:"#61DAFB"
        },
        day: {
            color:"#FFC700"
        },
        turnNight: {
            color:"#61DAFB",
            transition:{ 
                color: {duration: .2},
            }
        },
        turnDay: {
            color:"#FFC700",
            transition:{ 
                color: {duration: .2},
            }
        }
}

    const timeText = <motion.p
        variants={textVariants}
        initial={theme === "night"? "night": "day"}
        animate={theme === "night"? "turnNight": "turnDay"}
        className={`
        inline
        `}>
            React
            </motion.p>


    return (
        <main>
            <div className="block text-center text-white">
                <h1 className="text-4xl font-Poppins font-normal">
    Let's Get {timeText}ive
                </h1>
                <p>
                    I love React and Serverless Functions
                </p>
            </div>
            <LandingCanvas />
        </main>
    )
}
export default Landing