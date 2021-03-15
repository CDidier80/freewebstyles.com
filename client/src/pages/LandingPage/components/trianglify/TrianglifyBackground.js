import React, { useEffect, useState } from 'react'
import Trianglify from './Trianglify'


const TrianglifyBackground = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const defaultOptions = {
        width: width,
        height: height,
        cellSize: 50,
        variance: .75,
        seed: null,
        xColors: 'random',
        yColors: 'match',
        fill: true,
        // palette: trianglify.colorbrewer,
        colorSpace: 'lab',
        // colorFunction: trianglify.colorFunctions.interpolateLinear(0.5),
        strokeWidth: 0,
        points: null
      }

      const resizeTrianglify = () => {
          setWidth(window.innerWidth)
          setHeight(window.innerHeight)
      }

      useEffect(()=>{
        window.addEventListener("resize", resizeTrianglify)
        if(width !== window.innerWidth || height !== window.innerHeight){
            resizeTrianglify()
        }
        return () => window.removeEventListener("resize", resizeTrianglify)
      }, [])
    

    return (
        <Trianglify {...defaultOptions}/>
    )
}

export default TrianglifyBackground
