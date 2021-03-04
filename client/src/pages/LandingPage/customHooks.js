import React, { useState } from 'react'
import { useGetStylishButtonStyles } from "./useLandingStyles"



export const useStylishButtonProps = (props) => {

    const [hidden, setHidden] = useState(false)
    const { getStylishButton } = useGetStylishButtonStyles()

    const onComplete = () => {
        // props.history.push('/main')
        setHidden(false)
    }

    const handleClick = (e) => setHidden(true)
    

    const particleProps = {
        particlesAmountCoefficient: 2,	
        onComplete: onComplete,
        onClick: handleClick,
        type: "triangle",
        color: "#eb6e34",
        hidden: hidden,
        duration: 2000,
    }

    const buttonProps = {
        onClick: () => setHidden(true),
        className: getStylishButton,
    }
    
    return {particleProps, buttonProps}

}