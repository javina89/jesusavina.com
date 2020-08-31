import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'
import { motion } from "framer-motion"

const Landing = () => {
    const {theme} = useContext(ThemeContext)
    const themeName = theme === "night"? "text-night" : "text-day"
    return (
        <main>
            <div className="block text-center text-white">
                <h1 className="text-4xl font-Poppins font-normal">
                    Let's Get <motion.span
                    animate={{scale: 1.3}}
                    transition={{ type: 'spring', stiffness: 300}}
                    className={`${themeName}`}>React</motion.span>ive
                </h1>
                <p>
                    I love React and Serverless Functions
                </p>
            </div>
        </main>
    )
}
export default Landing