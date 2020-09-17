import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'
import { motion } from "framer-motion"
import LandingSVG from './LandingSVG'

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

    const themeColor = theme === "night"? "night": "day"

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
                    I love React and Serverless Functions{window.innerWidth}and{window.innerHeight}
                </p>
                <motion.button
                initial={{ x: '-70vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring' }}
                className={`mt-8 bg-transparent hover:bg-${themeColor} text-${themeColor} font-semibold hover:text-white py-2 px-4 border border-${themeColor} hover:border-transparent rounded`}>
                    Projects
                </motion.button>
            </div>
            {window.innerHeight > 400 && <LandingSVG />}
        </main>
    )
}
export default Landing