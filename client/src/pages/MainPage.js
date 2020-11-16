import React, { Component } from 'react'
import Ace from "../components/main-page-components/editors/Ace.js"
import SubmitForm from "../components/main-page-components/SubmitForm.js"
import CreateAccountPrompt from "../components/main-page-components/SubmitForm.js"
import '../styles/MainPage.css'
// import TriangleSvg from "../components/landing-components/TriangleSvg.js"
import { PostStyleService } from '../services/StyleService.js'


const { htmlBoilerplateStart } = require('../components/main-page-components/editors/htmlBoilerplate.js')

class MainPage extends Component {
    // console.log(children)
    constructor(props){
      super(props)
      this.state = {
          // props from App.js 
          toggleAuthenticated: props.toggleAuthenticated,
          verifyTokenValid: props.verifyTokenValid,
          authenticated: props.authenticated,
          currentUser: props.currentUser,
          //
          htmlStart: htmlBoilerplateStart,
          userCSS: "",
          cssEnd: "</style></head>",
          userHTML: "<body><h1>It works!</h1></body>",
          htmlEnd: "</html>",
          codeIsDisplayed: true,
          editorHeight: [{maxHeight: "300px"}, {maxHeight: "0px"}],
          isSubmitPanelVisible: false, 
          isCreateAccountPromptVisible: false,
        //   isUserSignedIn: true
        //   styleData: {styleName: "", tags: [], license: ""}   // be wary of calling state within state?
      }
    }
  
    updateHTML = (newValue) => {
        // console.log("updateHTML reached")
        this.setState({userHTML: newValue})
    }

    updateCSS = (newValue) => {
        // console.log("updateCSSreached")
        this.setState({userCSS: newValue})
    }

    onChange = (newValue) =>  {
    console.log("change", newValue);
    }

    // checks whether code is currently displayed and updates the state to the opposite boolean
    // at re-rendering, the editor wrapper div checks the boolean and sets the correct max-height
    toggleCode = () => {        
         this.state.codeIsDisplayed === true ? this.setState({codeIsDisplayed: false}) : this.setState({codeIsDisplayed: true})
    }


    handlePostClick = () => {
        const {authenticated, isSubmitPanelVisible, isCreateAccountFormVisible} = this.state
        authenticated ? this.setState({isSubmitPanelVisible: true}) : this.setState({isCreateAccountPromptVisible: true})
    }

    toggleABoolean = (e, propToChange) => { 
        switch (propToChange) {
            case "isSubmitPanelVisible":
              this.setState({isSubmitPanelVisible: false})
              break
            // case "tags":
            //   this.setState({tags: [...event.target.value]})
            //   break
            // case "license":
            //   this.setState({license: event.target.value})
            //   break
            default: 
                console.log("toggleABoolean() switch statement originating in MainPage.js had no matching cases.")
          }
    }

    // from here to PostStyleService.js to Server.js to AppRouter to PostStyle subRouter to
//     postStyle = async (e) => {
//         e.preventDefault
//         if (this.state.currentUserID === null) {
//             this.props.history.push('/redirectedmotherfucker')
//             return
//         }
//         let {htmlStart, userCSS, cssEnd, userHTML, htmlEnd} = this.state
//         const fullCode = htmlStart + userCSS + cssEnd + userHTML + htmlEnd
//         try {
//             await __postAStyle(
//                 {fullCode: fullCode, userHTML: userHTML, userCSS: userCSS},
//                 this.props.currentUser.__id)
//         } catch (error) {
//             console.log(error)
//         }
//    }

    render() {
        const {htmlStart, userCSS, cssEnd, userHTML, htmlEnd, codeIsDisplayed, editorHeight, isSubmitPanelVisible, 
            isCreateAccountPromptVisible, currentUser, authenticated} = this.state
        console.log("The state of MainPage at render: ", this.state)
        console.log("this.props of MainPage at rendering: ", this.props)
        console.log("Current User: ", currentUser)
        console.log("Authenticated: ", authenticated)
        console.log('/////////////////////////////////////////////////////////////////')
        return (
            <div className="mainPage">
                <div className="display">
                    <iframe title="mainIframe" className="iframeWindow" srcDoc={htmlStart + userCSS + cssEnd + userHTML + htmlEnd}></iframe>
                    <div className="iframeButtonPanel">
                        <button className="toggleCodeButton" onClick={() => this.toggleCode()}>Toggle Code</button>
                    </div>
                    <h3 className="languageHeader htmlHeader">HTML</h3>
                    <h3 className="languageHeader cssHeader">CSS</h3>
                    <div className="editorWrapper" style={codeIsDisplayed ? editorHeight[0] : editorHeight[1]}>
                        <Ace className="editor" updateFunction={this.updateHTML} mode={'html'} theme={'github'} name={'htmlEditor'}/>
                        <Ace className="editor" updateFunction={this.updateCSS} mode={'css'} theme={'github'} name={'cssEditor'}/>
                    </div>
                    <button className="postButton" onClick={()=>this.handlePostClick()}>Post</button>
                    {isSubmitPanelVisible ? <SubmitForm toggleABoolean={this.toggleABoolean} userCSS={userCSS} userHTML={userHTML}/> : null}
                    {isCreateAccountPromptVisible ? <CreateAccountPrompt /> : null}


                </div>
                {/* <TriangleSvg /> */}
            </div>
        )
    }
  
  }
  

  export default MainPage

