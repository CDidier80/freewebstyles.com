import React, { Component } from 'react'
import './mainPage.css'
import Ace from "./components/Ace"
import MiniCard from "./components/MiniCard"
import { TextField } from '@material-ui/core'
import TriangleSvg from '../LandingPage/components/TriangleSvg'
import { htmlBoilerplate } from "../../modules/htmlBoilerplate"


class MainPage extends Component {
    // console.log(children)
    constructor(props){
        super(props)
            this.state = {
                htmlStart: htmlBoilerplate,
                userCSS: "",
                cssEnd: "</style></head>",
                userHTML: "",
                htmlEnd: "</html>",
                codeIsDisplayed: true,
                editorHeight: [{maxHeight: "300px"}, {maxHeight: "0px"}],
                styleSearchField: "",
            }
    }
    

    // componentDidMount = async () => {
    //     try {
    //         const recentStyles = await getManyRecentStylesService(authenticated ? 6 : 9)
    //         if ( !authenticated ) {
    //             return [[], []]
    //         }
    //         const populateStyles = async (recentStyles) => {
    //             const usersRecentStyles = await getManyUsersRecentStylesService(6)
    //             const usersLiked = await getManyUsersLikedStylesService(6)
    //             const newState = {
    //                 recentlyAddedStyles: recentStyles,
    //                 usersRecentStyles: usersRecentStyles,
    //                 usersLikedStyles: usersLiked
    //             }
    //             this.setState(newState)
    //             return
    //         } 
    //         populateStyles(recentStyles)
            
    //     } catch (error) {
    //         console.log("Error raised in componentDidMount of MainPage.js:", error)
    //     }
    // }
    

    // updateSearchField = (e) =>  {
    // const newSearchFieldValue = e.target.value
    // this.setState({styleSearchField: newSearchFieldValue});
    // }

    // submitStyleSearch = async () => {
    //     const styleSearchQuery = this.state.styleSearchField
    //     console.log(styleSearchQuery)
    //     try {
    //         const response = await GetOneStyleService(styleSearchQuery)
    //         console.log("Response receieved in MainPage.js: ", response)
    //         const {css, html} = response.style
    //         this.setState({userCSS: css, userHTML: html})
    //         console.log(this.state)
    //     } catch (error) {
    //         console.log("Error thrown at submitStyleSearch() in MainPage.js: ", error)
    //     }
    // }

    // toggleCode = () => {
    //     const { codeIsDisplayed } = this.state        
    //     this.setState({codeIsDisplayed: !codeIsDisplayed}) 
    // }


    // handlePostClick = () => {
    //     const {authenticated} = this.state
    //     console.log("User authenticated: ", authenticated)
    //     authenticated ? this.setState({isSubmitPanelVisible: true}) : this.setState({isCreateAccountPromptVisible: true})
    // }

    // toggleABoolean = (e, propToChange) => { 
    //     switch (propToChange) {
    //         case "isSubmitPanelVisible":
    //             this.setState({isSubmitPanelVisible: false})
    //             break
    //         case "isCreateAccountPromptVisible":
    //             this.setState({isCreateAccountPromptVisible: false})
    //             break
    //         default: 
    //             console.log("toggleABoolean() switch statement originating in MainPage.js had no matching cases.")
    //     }
    // }

    // updateHTML = (newValue) => {
    //     this.setState({userHTML: newValue})
    // }

    // updateCSS = (newValue) => {
    //     this.setState({userCSS: newValue})
    // }

    render() {


        return (
            <div>hello</div>
            // <div className="mainPage">
            //     <TriangleSvg />
            //     <div className="display">
            //         <iframe 
            //             title="mainIframe" 
            //             className="iframeWindow" 
            //             srcDoc={htmlStart + userCSS + cssEnd + userHTML + htmlEnd}
            //         >
            //         </iframe>
            //         <div className="iframeButtonPanel">
            //             <button 
            //                 className="toggleCodeButton" 
            //                 onClick={() => this.toggleCode()}
            //             >
            //                 Toggle Code
            //             </button>
            //         </div>
            //         <h3 
            //         className="languageHeader htmlHeader">HTML</h3>
            //         <h3 className="languageHeader cssHeader">CSS</h3>
            //         <div 
            //             className="editorWrapper" 
            //             style={codeIsDisplayed ? editorHeight[0] : editorHeight[1]}
            //         >
            //             <Ace 
            //                 {...this.state} 
            //                 className="editor" 
            //                 val={userHTML} 
            //                 mode={'html'} 
            //                 updateFunction={this.updateHTML} 
            //                 theme={'github'} 
            //                 name={'htmlEditor'}
            //             />
            //             <Ace 
            //                 {...this.state} 
            //                 className="editor" 
            //                 val={userCSS} 
            //                 updateFunction={this.updateCSS} 
            //                 mode={'css'} 
            //                 theme={'github'} 
            //                 name={'cssEditor'}
            //             />
            //         </div>
            //         <button    
            //             className="postButton"              
            //             onClick={()=>this.handlePostClick()}
            //         >
            //             Post
            //         </button>
            //         <TextField 
            //             className="styleSearchField"        
            //             onChange={(e)=>this.updateSearchField(e)}
            //             >
            //                 {styleSearchField}
            //         </TextField>
            //         <button    
            //             className="submitStyleSearchButton" 
            //             onClick={()=>this.submitStyleSearch()}
            //         >
            //             search
            //         </button>
            //         {isSubmitPanelVisible && (
            //             <SubmitForm 
            //                 toggleABoolean={this.toggleABoolean} 
            //                 currentUser={currentUser} 
            //                 userCSS={userCSS} 
            //                 userHTML={userHTML}
            //             />
            //         )}
            //         {isCreateAccountPromptVisible && (
            //             <CreateAccountPrompt 
            //                 toggleABoolean={this.toggleABoolean} 
            //                 goToSignupPage={goToSignupPage}
            //             />
            //         )}
            //     <div className="styleGrid">
            //         <h1 className="recentlyAdded">Recently Added</h1>
            //         {recentlyAdded.map((style, index) => <MiniCard {...this.state} isUsersOwnStyle={false}/>)}
            //         {authenticated && <h1 className="recentlyAdded">Your Recent Styles</h1> }


            //     </div>
                
            // </div>
            //                 </div>
        )
    }
  
  }
//   updateFunction={this.updateHTML}

  export default MainPage

