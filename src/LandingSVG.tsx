import React, { useState, useEffect, useRef, useContext } from 'react'
import {ThemeContext, autoTheme} from './themeContext'
import { motion } from "framer-motion"

const LandingSVG = () => {


    const {theme, toggleTheme} = useContext(ThemeContext)


    const biking = () => {

    }
    // const stars = () => {
    //     for (let x = 0; x < 20; x++){
    //         if (canSee[x] === false){

    //         }
    //     }
    // }

    // const [canSee, setCanSee] = useState(false)

    const [canSee, setCanSee] = useState(new Array(20).fill(false))

    const xPos: number[] = new Array(20).fill(0)
    const yPos: number[] = new Array(20).fill(0)

    useEffect(()=> {
        const timer = setTimeout(() => {
            console.log(canSee)
            const canSeeNow = [...canSee]
            for (let x = 0; x < 20; x++){
                if (canSeeNow[x] === false){
                    // If chance to be true
                    // when going true, have transition animation
                    // true? ternary
                    if (Math.floor(Math.random() * 100) + 1 > 85){
                        canSeeNow.splice(x, 1, true)
                    }
                } else {
                    if (Math.floor(Math.random() * 100) + 1 > 20){
                        canSeeNow.splice(x, 1, false)
                    }
                }
            }
            console.log(canSee)
            setCanSee(canSeeNow)
        }, 3000)
        // setCanSee(canSeeNow)

        return () => {
            console.log("Cleanup");
            clearTimeout(timer);
        }
    }, [canSee])

    const colorPathVariants = {
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

    const waterPathVariants = {
        night: {
            fill:"#61DAFB"
        },
        day: {
            fill:"#1BE7FF"
        },
        turnNight: {
            fill:"#61DAFB",
            transition:{ 
                fill: {duration: .2},
            }
        },
        turnDay: {
            fill:"#1BE7FF",
            transition:{ 
                fill: {duration: .2},
            }
        }
    }

    const grassPathVariants = {
        night: {
            fill:"#426A5A"
        },
        day: {
            fill:"#519872"
        },
        turnNight: {
            fill:"#426A5A",
            transition:{ 
                fill: {duration: .2},
            }
        },
        turnDay: {
            fill:"#519872",
            transition:{ 
                fill: {duration: .2},
            }
        }
    }

    const starGroupVariants = {
        night: {
            y:0
        },
        day: {
            y:"-20vh"
        },
        turnNight: {
            y: 0,
            transition:{ 
                y: {duration: .2},
            }
        },
        turnDay: {
            y: "-20vh",
            transition:{ 
                y: {duration: .2},
            }
        }
    }

    const starPathVariants = {
        start: {
            opacity: 0
        },
        turnNight: {
            opacity: 1,
            transition:{ 
                opacity: {duration: .9},
            }
        },
        turnDay: {
            opacity: 0,
            transition:{ 
                opacity: {duration: .9},
            }
        }
    }

    const sceneSVG = <>
        {/* <motion.svg
        variants={colorPathVariants}
        initial={theme === "night"? "night": "day"}
        className="visible md:invisible absolute inset-x-0 bottom-0" viewBox="0 0 835 415"><path id="NorthWater" d="M0.425,10.021c131.805,-7.949 270.617,-11.374 416.667,-3.339c140.698,-10.44 279.53,-6.772 416.667,3.339l-0,66.793l-833.334,0" fill="#01f"/><rect id="Grass" x="0.425" y="76.814" width="833.333" height="225.694" fill="#4b9e00"/><g id="Road"><rect x="0.425" y="139.314" width="833.333" height="76.389" fill="#2e2e2e"/><rect x="16.05" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="161.884" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="307.717" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="453.55" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="599.384" y="174.036" width="72.917" height="6.944" fill="#fff"/><rect x="745.217" y="174.036" width="72.917" height="6.944" fill="#fff"/></g><rect id="Sand" x="0.425" y="274.731" width="833.333" height="83.333" fill="#e5ac7c"/><path id="SouthWater" d="M0.425,346.827c131.805,-7.949 270.617,-11.375 416.667,-3.34c140.698,-10.44 279.53,-6.772 416.667,3.34l-0,66.793l-833.334,-0" fill="#01f"/>
        </motion.svg> */}
        <motion.svg
        variants={colorPathVariants}
        initial={theme === "night"? "night": "day"}
        animate={theme === "night"? "turnNight": "turnDay"}
        className="absolute inset-x-0 bottom-0" viewBox="0 0 838 335">
            <motion.path id="NorthWater"
            variants={waterPathVariants}
            d="M1.866,104.419c131.804,-2.938 270.617,-4.204 416.666,-1.234c140.698,-3.858 279.53,-2.503 416.667,1.234l0,24.684l-833.333,0" fill="#01f" stroke="#000" strokeWidth="0.85px"/>
            <motion.rect
            variants={grassPathVariants}
            id="Grass" x="1.866" y="114.988" width="833.333" height="164.829"/>
            <g id="Road">
                <rect id="Ground" x="1.866" y="164.615" width="833.333" height="62.933" fill="#2e2e2e"/>
                <path id="Lines" d="M1.866,196.082l833.333,-0" stroke="#fff" strokeWidth="3.73px" strokeDasharray="26.12,55.97,0,0"/>
                <rect id="SouthSidewalk" x="1.866" y="227.548" width="833.333" height="16.591" fill="#898989" stroke="#000" strokeWidth="0.85px"/>
                <rect id="NorthSidewalk" x="1.866" y="148.024" width="833.333" height="17.164" fill="#898989" stroke="#000" strokeWidth="0.85px"/>
            </g>
            <path id="Sand" d="M1.866,276.215c140.8,-6.692 272.276,-1.39 416.666,-2.357c146.347,0.632 286.446,-6.901 416.667,2.357l0,47.132l-833.333,-0" fill="#e5ac7c" stroke="#000" strokeWidth="0.85px"/>
            <motion.path variants={waterPathVariants}
            id="SouthWater" d="M1.866,315.53c131.804,-2.173 270.617,-3.11 416.666,-0.913c140.698,-2.854 279.53,-1.851 416.667,0.913l0,18.257l-833.333,0" fill="#01f" stroke="#000" strokeWidth="0.85px"/>
            
            <motion.g id="Stars"
            variants={starGroupVariants}
            initial={theme === "night"? "night": "day"}>
                <motion.path id="Star"
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[0] === true? "turnNight": "turnDay"}
                d="M47.516,4.243l0.941,2.894l3.043,0l-2.462,1.789l0.941,2.895l-2.463,-1.789l-2.462,1.789l0.941,-2.895l-2.463,-1.789l3.044,0l0.94,-2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[1] === true? "turnNight": "turnDay"}
                id="Star1" d="M81.028,20.999l0.941,2.894l3.043,0l-2.462,1.789l0.941,2.895l-2.463,-1.789l-2.462,1.789l0.941,-2.895l-2.462,-1.789l3.043,0l0.94,-2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[2] === true? "turnNight": "turnDay"}
                id="Star2" d="M107.559,0.454l0.94,2.894l3.044,0l-2.462,1.789l0.94,2.895l-2.462,-1.789l-2.462,1.789l0.94,-2.895l-2.462,-1.789l3.043,0l0.941,-2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[3] === true? "turnNight": "turnDay"}
                id="Star3" d="M141.071,17.21l0.94,2.894l3.044,0l-2.462,1.789l0.94,2.895l-2.462,-1.789l-2.462,1.789l0.94,-2.895l-2.462,-1.789l3.043,0l0.941,-2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[4] === true? "turnNight": "turnDay"}
                id="Star4" d="M214.183,66.454l0.941,-2.894l3.043,-0l-2.462,-1.789l0.94,-2.895l-2.462,1.789l-2.462,-1.789l0.94,2.895l-2.462,1.789l3.044,-0l0.94,2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[5] === true? "turnNight": "turnDay"}
                id="Star5" d="M247.695,49.698l0.941,-2.894l3.043,-0l-2.462,-1.789l0.94,-2.895l-2.462,1.789l-2.462,-1.789l0.94,2.895l-2.462,1.789l3.044,-0l0.94,2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[6] === true? "turnNight": "turnDay"}
                id="Star6" d="M274.226,70.243l0.94,-2.894l3.044,-0l-2.463,-1.789l0.941,-2.895l-2.462,1.789l-2.463,-1.789l0.941,2.895l-2.462,1.789l3.043,-0l0.941,2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[7] === true? "turnNight": "turnDay"}
                id="Star7" d="M307.738,53.487l0.94,-2.894l3.044,-0l-2.463,-1.789l0.941,-2.895l-2.462,1.789l-2.463,-1.789l0.941,2.895l-2.462,1.789l3.043,-0l0.941,2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[8] === true? "turnNight": "turnDay"}
                id="Star8" d="M623.643,66.454l-0.94,-2.894l-3.044,-0l2.462,-1.789l-0.94,-2.895l2.462,1.789l2.462,-1.789l-0.94,2.895l2.462,1.789l-3.043,-0l-0.941,2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[9] === true? "turnNight": "turnDay"}
                id="Star9" d="M590.131,49.698l-0.941,-2.894l-3.043,-0l2.462,-1.789l-0.94,-2.895l2.462,1.789l2.462,-1.789l-0.94,2.895l2.462,1.789l-3.044,-0l-0.94,2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[10] === true? "turnNight": "turnDay"}
                id="Star10" d="M563.601,70.243l-0.941,-2.894l-3.043,-0l2.462,-1.789l-0.941,-2.895l2.463,1.789l2.462,-1.789l-0.941,2.895l2.463,1.789l-3.044,-0l-0.94,2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[11] === true? "turnNight": "turnDay"}
                id="Star11" d="M530.089,53.487l-0.941,-2.894l-3.043,-0l2.462,-1.789l-0.941,-2.895l2.463,1.789l2.462,-1.789l-0.941,2.895l2.463,1.789l-3.044,-0l-0.94,2.894Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[12] === true? "turnNight": "turnDay"}
                id="Star12" d="M376.866,46.104l-2.895,0.941l0,3.043l-1.789,-2.462l-2.894,0.941l1.789,-2.463l-1.789,-2.462l2.894,0.941l1.789,-2.463l0,3.044l2.895,0.94Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[13] === true? "turnNight": "turnDay"}
                id="Star13" d="M360.11,54.617l-2.895,0.94l0,3.043l-1.789,-2.462l-2.894,0.941l1.789,-2.462l-1.789,-2.463l2.894,0.941l1.789,-2.462l0,3.043l2.895,0.941Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[14] === true? "turnNight": "turnDay"}
                id="Star14" d="M460.199,46.104l2.895,0.941l-0,3.043l1.789,-2.462l2.894,0.941l-1.789,-2.463l1.789,-2.462l-2.894,0.941l-1.789,-2.463l-0,3.044l-2.895,0.94Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[15] === true? "turnNight": "turnDay"}
                id="Star15" d="M476.955,54.617l2.895,0.94l-0,3.043l1.789,-2.462l2.894,0.941l-1.789,-2.462l1.789,-2.463l-2.894,0.941l-1.789,-2.462l-0,3.043l-2.895,0.941Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[16] === true? "turnNight": "turnDay"}
                id="Star16" d="M789.548,5.286l-0.94,2.895l-3.044,-0l2.463,1.789l-0.941,2.894l2.462,-1.788l2.463,1.788l-0.941,-2.894l2.462,-1.789l-3.043,-0l-0.941,-2.895Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[17] === true? "turnNight": "turnDay"}
                id="Star17" d="M756.036,22.042l-0.94,2.895l-3.044,0l2.463,1.789l-0.941,2.894l2.462,-1.788l2.463,1.788l-0.941,-2.894l2.462,-1.789l-3.043,0l-0.941,-2.895Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[18] === true? "turnNight": "turnDay"}
                id="Star18" d="M729.506,1.497l-0.94,2.895l-3.044,-0l2.462,1.789l-0.94,2.894l2.462,-1.788l2.462,1.788l-0.94,-2.894l2.462,-1.789l-3.043,-0l-0.941,-2.895Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
                <motion.path
                variants={starPathVariants}
                initial={"start"}
                animate={canSee[19] === true? "turnNight": "turnDay"}
                id="Star19" d="M695.994,18.253l-0.941,2.895l-3.043,0l2.462,1.789l-0.94,2.894l2.462,-1.788l2.462,1.788l-0.94,-2.894l2.462,-1.789l-3.044,0l-0.94,-2.895Z" fill="#00c2ff" stroke="#000" strokeWidth="0.4px"/>
            </motion.g>
        </motion.svg>
    </>

    return (
        <div className="max-w-xs">
            {sceneSVG}
        </div>
        )
}

export default LandingSVG