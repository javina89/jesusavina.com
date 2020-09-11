import { useReducedMotion } from 'framer-motion'
import React, { useEffect, useRef, useContext } from 'react'
import * as ReactPixi from '@inlet/react-pixi';
import {ThemeContext, autoTheme} from './themeContext'

const LandingCanvas = () => {

    const {
        Stage,
        Sprite,
        PixiComponent,
        Container,
        AnimatedSprite,
        useApp,
        useTick
      } = ReactPixi;

    const {theme, toggleTheme} = useContext(ThemeContext)



    return (
        <Stage>
            <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" x={100} y={100} />
        </Stage>
    )
}

export default LandingCanvas