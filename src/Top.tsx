import React, { useEffect, useState, useContext } from 'react'
import {ThemeContext} from './themeContext'

const Top = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    const [time, setTime] = useState((new Date()).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }))

    useEffect(()=> {
        const timer = setInterval(() => {
            setTime((new Date()).toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              }))
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    },[])

    const moon = <svg
    onClick={toggleTheme}
    className={`
    h-12
    fill-current
    ${theme === "night"? "text-night" : "text-day"}
    order-2
    md:order-3`}
    viewBox="0 0 122 109" fill="none"><circle cx="49.5" cy="54.5" r="49.5" fill="#61DAFB"/><circle cx="67.5" cy="54.5" r="54" fill="#2C2A37" stroke="#61DAFB"/></svg>

    const sun = <svg
    onClick={toggleTheme}
    className={`
    h-12
    fill-current
    ${theme === "night"? "text-night" : "text-day"}
    order-2
    md:order-3`}
    viewBox="0 0 109 109" fill="none"><circle cx="54.5" cy="54.5" r="54.5" fill="#FFC700"/></svg>

    return (
        <nav>
            <div
            className="
            flex
            flex-col
            pt-8
            pb-8
            text-center
            items-center
            md:flex-row
            md:justify-between
            md:pl-20
            md:pr-20">
                <p
                className={`
                text-5xl
                md:text-3xl
                ${theme === "night"? "text-night" : "text-day"}
                order-1
                `}>
                    {time}
                    </p>
                <p
                className={`
                text-white
                text-lg
                pt-4
                order-3
                md:invisible
                md:pt-0
                md:order-2`}>
                    Jesus Avina
                    </p>
                    {theme === "night"? moon : sun}
            </div>
        </nav>
    )
}

export default Top