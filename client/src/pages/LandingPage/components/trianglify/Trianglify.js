import React, { useRef, useEffect, useState } from 'react'
import trianglify from 'trianglify'

export default function Trianglify (props) {
    const {width, height} = props

  const ref = useRef()

  const [pattern,] = useState(() => trianglify(props) )
  const [canvas, ] = useState(() => pattern.toCanvas())

  useEffect(() => {
    const context = ref.current.getContext('2d')
    context.drawImage(canvas, 0, 0, width, height)
  }, [ width, height ])

  const Element = "canvas"
  return <Element ref={ref} width={width} height={height} />
}

