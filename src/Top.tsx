import React, { useEffect, useState } from 'react'

export const Top = () => {

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

    return (
        <nav>
            <div className="
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
                <p className="
                text-5xl
                md:text-3xl
                text-theme
                order-1">
                    {time}
                    </p>
                <p className="
                text-white
                text-lg
                pt-4
                order-3
                md:invisible
                md:pt-0
                md:order-2">
                    Jesus Avina
                    </p>
                    <svg className="
                    h-12
                    fill-current
                    text-theme
                    order-2
                    md:order-3"
                    viewBox="0 0 77 109"
                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M77 108.858c-21.323-8.84-31.5-29.13-31.5-53.65 0-23.273 8.69-44.116 28.297-53.661C45.6 3.204 23.245 26.595 23.245 55.207c0 29.688 24.067 53.755 53.755 53.755v-.104zM11.623 0l2.61 8.031h8.443l-6.831 4.963 2.61 8.032-6.832-4.964-6.832 4.964 2.61-8.031L.568 8.03h8.444L11.623 0z"/>
                    </svg>
            </div>
        </nav>
    )
}