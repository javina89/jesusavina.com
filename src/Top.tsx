import React, { useEffect, useState, useContext, useRef } from 'react'
import {ThemeContext, autoTheme} from './themeContext'
import { motion } from "framer-motion"

const Top = () => {
    console.log("top")

    const {theme, toggleTheme} = useContext(ThemeContext)

    const getTime = () => {
        return (new Date()).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })
    }

    const getSeconds = () => {
        return ((60 -
            Number(
              new Date().toLocaleString("en-US", {
                second: "numeric"
              })
            )) *
            1000)
    }
      
    const [time, setTime] = useState(getTime)

    useEffect(()=> {
        console.log("useEffect")
        const timer = setTimeout(() => {
            setTime(getTime)
        }, getSeconds())

        return () => {
            console.log("Cleanup");
            clearTimeout(timer);
        }
    }, [time])


    const [night, setNight] = useState(theme === "night"? true: false)

    const svgThemeVariants = {
        night: {

        },
        day: {

        },
        turnNight: {

        },
        turnDay: {
            
        }
    }

    const rayPathVariants = {
        night: {
            opacity: 0
        },
        day: {
            opacity: 1,
        },
        turnNight: {
            opacity: 0,
            transition:{ 
                opacity: {duration: .2},
            }
        },
        turnDay: {
            opacity: 1,
            transition:{ 
                opacity: {duration: .2},
            }
        }
    }

    const shadowPathVariants = {
        night: {
            opacity: 1
        },
        day: {
            opacity: 0
        },
        turnNight: {
            opacity: 1,
            transition:{ 
                opacity: {duration: .2},
            }
        },
        turnDay: {
            opacity: 0,
            transition:{ 
                opacity: {duration: .2},
            }
        }
    }

    const facePathVariants = {
        night: {
            fill:"#61DAFB"
        },
        day: {
            fill:"#FFC700"
        },
        turnNight: {
            fill:"#61DAFB",
            transition:{ 
                fill: {duration: .2},
            }
        },
        turnDay: {
            fill:"#FFC700",
            transition:{ 
                fill: {duration: .2},
            }
        }
    }

    const eyePathVariants = {
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

    const smilePathVariants = {
        night: {
            stroke:"#61DAFB"
        },
        day: {
            stroke:"#2C2A37"
        },
        turnNight: {
            stroke:"#61DAFB",
            transition:{ 
                stroke: {duration: .2},
            }
        },
        turnDay: {
            stroke:"#2C2A37",
            transition:{ 
                stroke: {duration: .2},
            }
        }
    }

    const timeTextVariants = {
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
    variants={timeTextVariants}
    initial={night? "night": "day"}
    animate={night? "turnNight": "turnDay"}
    className={`
    text-5xl
    md:text-3xl
    pb-3
    order-1
    `}>
        {time}
        </motion.p>

    const themeSVG = <motion.svg
    variants={svgThemeVariants}
    initial={night? "night": "day"}
    animate={night? "turnNight": "turnDay"}
    onClick={(event) => {
        toggleTheme(event);
        setNight(!night);}
    }
    className={`
    cursor-pointer
    order-2
    md:order-3
    ${theme === "night"? "text-night" : "text-day"}
    h-12
    md:h-12`}
    viewBox="0 0 215 215">
        <motion.path
        variants={rayPathVariants}
        className="origin-center animate-spin-ray"
        d="M92.879 53.401c0-29.473 6.474-53.4 14.449-53.4s14.45 23.927 14.45 53.4c14.736-25.524 32.308-43.009 39.214-39.022 6.907 3.988.55 27.947-14.187 53.472 25.525-14.737 49.484-21.094 53.472-14.187 3.987 6.906-13.498 24.478-39.022 39.214 29.473 0 53.4 6.475 53.4 14.45s-23.927 14.45-53.4 14.45c25.524 14.736 43.009 32.307 39.022 39.214-3.988 6.906-27.947.55-53.472-14.187 14.737 25.524 21.094 49.484 14.187 53.472-6.906 3.987-24.478-13.498-39.214-39.022 0 29.472-6.475 53.401-14.45 53.401s-14.45-23.929-14.45-53.4c-14.736 25.523-32.307 43.008-39.214 39.021-6.906-3.988-.55-27.948 14.187-53.472-25.524 14.736-49.484 21.093-53.472 14.187-3.987-6.907 13.498-24.478 39.022-39.215C23.929 121.777 0 115.303 0 107.328s23.929-14.45 53.4-14.45C27.878 78.142 10.393 60.57 14.38 53.664c3.988-6.907 27.948-.55 53.472 14.187C53.115 42.326 46.758 18.367 53.664 14.38c6.907-3.987 24.478 13.498 39.215 39.022z" fill="#ffbf00"/>
    
        <motion.circle
        variants={facePathVariants}
        cx="453.614" cy="183.614" r="83.614" fill="#ffbf00" transform="matrix(.95678 0 0 .95678 -326.679 -68.35)"/>
    
        <motion.circle
        variants={shadowPathVariants}
        className="animate-swing-shadow"
        cx="0" cy="0" r="83.614" fill="#2C2A37"/>
    
        <motion.circle
        variants={eyePathVariants}
        cx="293.383" cy="170.88" r="7.383" transform="translate(-208.979 -79.606)"/>
    
        <motion.circle
        variants={eyePathVariants}
        cx="293.383" cy="170.88" r="7.383" transform="translate(-166.055 -79.606)"/>
        
        <motion.path
        variants={smilePathVariants}
        d="M79.828 127.242c18.333 17.25 36.667 19.782 55 0" fill="none" stroke="#000" strokeWidth="3"/>

    </motion.svg>

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
                {timeText}
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
                {themeSVG}
            </div>
        </nav>
    )
}

export default Top