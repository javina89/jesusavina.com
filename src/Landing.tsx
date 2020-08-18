import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

const Landing = (props) => {
    const {theme} = useContext(ThemeContext)
    const themeName = theme === "night"? "text-night" : "text-day"
    return (
        <main>
            <div className="block text-center text-white">
                <h1 className="text-4xl font-Poppins font-normal">
                    Let's Get <span className={`${themeName}`}>React</span>ive
                </h1>
                <p>
                    I love React and Serverless Functions
                </p>
            </div>
        </main>
    )
}
export default Landing