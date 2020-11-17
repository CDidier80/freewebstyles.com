import React, { Component } from 'react'
import '../../styles/CreateAccountPrompt.css'



export default class SubmitForm extends Component {
    constructor(props){
        super(props)
        // console.log(this.props.userCSS)
        this.state = {
            toggleABoolean: props.toggleABoolean,
            goToSignupPage: props.goToSignupPage
        }
    }
    

    render() {
        // removed from MenuItems: style={getStyles(name, personName, theme)}
        // removed from Select: input={<Input />}  onChange={handleChange} 
        // MUST PUT IN A HANDLE CHANGE FOR SELECT
        // select documentation: https://material-ui.com/components/selects/#select
        
        const {toggleABoolean, goToSignupPage} = this.state
        console.log("this.state.goToSignupPage logged at CreateAccountPrompt.js render: ", this.state.goToSignupPage)
        return (
            <div className="customBackdrop" id="backdrop" onClick={(e) => toggleABoolean(e, "isCreateAccountPromptVisible")}>
                <div className="prompt">
                    <p className="pTagPrompt">Sign in to share your style</p>
                    <div className="linkContainer">
                        <p className="signInLink" onClick={(e)=>goToSignupPage(e)}>Sign In</p>
                        <p className="signUpLink" onClick={(e)=>goToSignupPage(e)}>Create Account</p>
                    </div>
                </div>
            </div>




            
        )
    }        
}
