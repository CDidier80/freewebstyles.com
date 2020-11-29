import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import { consoleLogTests } from '../../js-exports/logTests'
import '../../styles/CreateAccountPrompt.css'



export default class SubmitForm extends Component {
    constructor(props){
        super(props)
        // console.log(this.props.userCSS)
        this.state = {
            fileName: "CreateAccountPrompt.js",
            toggleABoolean: props.toggleABoolean,
        }
    }
    

    render() {
        const {fileName} = this.state, {props, state} = this
        consoleLogTests("class", fileName, props, state, [] )
        const {toggleABoolean, goToSignupPage} = this.state
        console.log("this.state.goToSignupPage logged at CreateAccountPrompt.js render: ", this.state.goToSignupPage)
        return (
            <div className="customBackdrop" id="backdrop" onClick={(e) => toggleABoolean(e, "isCreateAccountPromptVisible")}>
                <div className="prompt">
                    <p className="pTagPrompt">Sign in to share your style</p>
                    <div className="linkContainer">
                        <NavLink className="signupNavlink" to={{pathname: "/login", state: {loginPageDefault: false}}}>Sign Up</NavLink>
                        <NavLink className="signinNavlink" to={{pathname: "/login", state: {loginPageDefault: "signInLink"}}}>Sign In</NavLink>
                    </div>
                </div>
            </div>




            
        )
    }        
}
