import React, { useState } from 'react'

interface ContextProps {
    theme: String;
    toggleTheme: Function;
  }

const ThemeContext = React.createContext<ContextProps>({
    theme: "night",
    toggleTheme: () => null
})

const ThemeContextProvider = (props: any) => {
    const time = (new Date()).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })

    const autoTheme = /(10|11|0?[6-9]):[0-5][0-9] (pm)/gi.test(time)? "night" : "day"

    const [theme, setTheme] = useState(autoTheme)

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "night"? "day" : "night")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}