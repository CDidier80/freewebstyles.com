import React, { useState } from 'react'
import ParticleEffectButton from 'react-particle-effect-button'
import { Button } from '@material-ui/core'
import { useStylishButtonProps } from "../customHooks"

// https://github.com/transitive-bullshit/react-particle-effect-button
const GetStylishButton = (props) => {


    const { particleProps, buttonProps } = useStylishButtonProps(props)
    return (
        <ParticleEffectButton {...particleProps} >
            <Button {...buttonProps} >             
                Get Stylish
            </Button>
        </ParticleEffectButton>
    )
}

export default GetStylishButton
