import React, { useEffect, useState, useContext, useRef } from 'react'
import {ThemeContext, autoTheme} from './themeContext'
import anime from 'animejs'

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

    const initialTheme = theme;

    // const themeSVG = document.querySelector('#themeSVG')
    // const themeRef = useRef<SVGSVGElement>(null)

    const themeSwitch = () => {
        anime.timeline({
            duration: 750,
            easing: "linear"
        })
        .add({
            targets: ".c1",
            cx: [
                {value: theme === "night"? 69.5: 57}
            ],
            fill: [
                {value: theme === "night"? "#2C2A37": "#61DAFB"}
            ]
        })
        .add({
            targets: ".c2",
            r: [
                {value: theme === "night"? 54.5: 51}
            ],
            fill: [
                {value: theme === "night"? "#FFC700": "#2C2A37"}
            ]
        })
        .add({
            targets: ".ray1",
            d: [
                {value: theme === "night"? "M69.5 0l6.495 11.25h-12.99L69.5 0zM69.5 139l-6.495-11.25h12.99L69.5 139zM139 68.5l-11.25 6.495v-12.99L139 68.5zM0 68.5l11.25 6.495v-12.99L0 68.5zM20.548 19.993l2.7 12.706 9.655-8.692-12.355-4.014zM119.611 21.018l-2.701 12.707-9.654-8.692 12.355-4.015zM118.91 118.91l-3.362-12.548-9.186 9.186 12.548 3.362zM19.303 118.91l3.362-12.548 9.186 9.186-12.548 3.362z": "M10 10"}
            ]
        })
    }

    // const themeSwitch = () => {
    //     anime({
    //         targets: '.c1',
    //         cx: [
    //             {value: 5}
    //         ]
    //     })
    // }

    const moon = <svg
    // ref={themeRef}
    onClick={(event) => {toggleTheme(event); themeSwitch();}}
    id="themeSVG"
    className={`
    order-2
    md:order-3
    ${theme === "night"? "text-night" : "text-day"}
    h-12
    md:h-12`}
    viewBox="0 0 139 139" fill="none">
        <circle className="c1" cx="57" cy="69.5" r="54.5" fill="#61DAFB"/>
        <circle className="c2" cx="69.5" cy="69.5" r="51" fill="#2C2A37" stroke="#61DAFB"/>
        <path className ="ray1" d=""></path>
    </svg>

    const sun = <svg
    onClick={(event) => {toggleTheme(event); themeSwitch();}}
    id="themeSVG"
    className={`
    order-2
    md:order-3
    ${theme === "night"? "text-night" : "text-day"}
    h-12
    md:h-12`}
    viewBox="0 0 139 139" fill="none">
        <circle className="c1" cx="69.5" cy="69.5" r="54.5" fill="#FFC700"/>
        <circle className="c2" cx="69.5" cy="69.5" r="54.5" fill="#FFC700"/>
        <path className ="ray1" d="M69.5 0l6.495 11.25h-12.99L69.5 0zM69.5 139l-6.495-11.25h12.99L69.5 139zM139 68.5l-11.25 6.495v-12.99L139 68.5zM0 68.5l11.25 6.495v-12.99L0 68.5zM20.548 19.993l2.7 12.706 9.655-8.692-12.355-4.014zM119.611 21.018l-2.701 12.707-9.654-8.692 12.355-4.015zM118.91 118.91l-3.362-12.548-9.186 9.186 12.548 3.362zM19.303 118.91l3.362-12.548 9.186 9.186-12.548 3.362z" fill="#FFC700"/>
    </svg>

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
                pb-3
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
                {autoTheme === "night"? moon : sun}
            </div>
        </nav>
    )
}

export default Top