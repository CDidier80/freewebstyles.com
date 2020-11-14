import React, { Component } from 'react'
import Ace from "../components/main-page-components/editors/Ace.js"
import '../styles/MainPage.css'
import TriangleSvg from "../components/landing-components/TriangleSvg.js"
import { __postAStyle } from '../services/StylePostService.js'

const { htmlBoilerplateStart } = require('../components/main-page-components/editors/htmlBoilerplate.js')

class MainPage extends Component {
    // console.log(children)
    constructor(props){
      super(props)
      this.state = {
          // ends 
          htmlStart: htmlBoilerplateStart,
          userCSS: "",
          cssEnd: "</style></head>",
          userHTML: "<body><h1>It works!</h1></body>",
          htmlEnd: "</html>",
          codeIsDisplayed: true,
          editorHeight: [{maxHeight: "300px"}, {maxHeight: "0px"}]
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
         console.log('toggleCode reached')
        
         this.state.codeIsDisplayed === true ? this.setState({codeIsDisplayed: false}) : this.setState({codeIsDisplayed: true})
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
        let {htmlStart, userCSS, cssEnd, userHTML, htmlEnd, codeIsDisplayed, editorHeight} = this.state
        return (
            <div className="mainPage">
                <div className="display">
                    <iframe className="iframeWindow" srcDoc={htmlStart + userCSS + cssEnd + userHTML + htmlEnd}></iframe>
                    <div className="iframeButtonPanel">
                        <button className="toggleCodeButton" onClick={() => this.toggleCode()}>Toggle Code</button>
                    </div>
                    <h3 className="languageHeader htmlHeader">HTML</h3>
                    <h3 className="languageHeader cssHeader">CSS</h3>
                    <div className="editorWrapper" style={codeIsDisplayed ? editorHeight[0] : editorHeight[1]}>
                        <Ace className="editor" updateFunction={this.updateHTML} mode={'html'} theme={'github'} name={'htmlEditor'}/>
                        <Ace className="editor" updateFunction={this.updateCSS} mode={'css'} theme={'github'} name={'cssEditor'}/>
                    </div>
                    <button className="postButton" onClick={()=>this.postStyle()}>Post</button>
                </div>
                {/* <TriangleSvg /> */}
            </div>
        )
    }
  
  }
  

  export default MainPage

