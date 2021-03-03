import React, { Component } from 'react'
import '../styles/MainPage.css'
import { GetOneStyleServic, getManyRecentStylesService, getManyUsersRecentStylesService, getManyUsersLikedStylesService} from '../../services/StyleService.js'
import Ace from "./components/editors/Ace.js.js.js"
import MiniCard from "./components/MiniCard.js.js.js"
import SubmitForm from "./components/SubmitForm.js"
import CreateAccountPrompt from "./components/CreateAccountPrompt.js.js.js"
import { TextField } from '@material-ui/core'
import TriangleSvg from '../LandingPage/landing-components/TriangleSvg'
// import TriangleSvg from "../components/landing-components/TriangleSvg.js"
import { MainPageLogs, MainPageRenderLogs } from "./logs"


const { htmlBoilerplateStart } = require('./components/editors/htmlBoilerplate.js.js.js')

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
                goToSignupPage: props.goToSignupPage,
                //
                htmlStart: htmlBoilerplateStart,
                userCSS: "",
                cssEnd: "</style></head>",
                userHTML: "",
                htmlEnd: "</html>",
                codeIsDisplayed: true,
                editorHeight: [{maxHeight: "300px"}, {maxHeight: "0px"}],
                isSubmitPanelVisible: false, 
                isCreateAccountPromptVisible: false,
                styleSearchField: "",
                recentlyAddedStyles: [],
                usersRecentStyles: [],
                usersLikedStyles: []
            }
    }
    

    componentDidMount = async () => {
        try {
            const recentStyles = await getManyRecentStylesService(authenticated ? 6 : 9)
            if ( !authenticated ) {
                return [[], []]
            }
            const populateStyles = async (recentStyles) => {
                const usersRecentStyles = await getManyUsersRecentStylesService(6)
                const usersLiked = await getManyUsersLikedStylesService(6)
                const newState = {
                    recentlyAddedStyles: recentStyles,
                    usersRecentStyles: usersRecentStyles,
                    usersLikedStyles: usersLiked
                }
                this.setState(newState)
                return
            } 
            populateStyles(recentStyles)
            
        } catch (error) {
            console.log("Error raised in componentDidMount of MainPage.js:", error)
        }
    }
    

    updateSearchField = (e) =>  {
    const newSearchFieldValue = e.target.value
    this.setState({styleSearchField: newSearchFieldValue});
    }

    submitStyleSearch = async () => {
        const styleSearchQuery = this.state.styleSearchField
        console.log(styleSearchQuery)
        try {
            const response = await GetOneStyleService(styleSearchQuery)
            console.log("Response receieved in MainPage.js: ", response)
            const {css, html} = response.style
            this.setState({userCSS: css, userHTML: html})
            console.log(this.state)
        } catch (error) {
            console.log("Error thrown at submitStyleSearch() in MainPage.js: ", error)
        }
    }

    toggleCode = () => {
        const { codeIsDisplayed } = this.state        
        this.setState({codeIsDisplayed: !codeIsDisplayed}) 
    }


    handlePostClick = () => {
        const {authenticated} = this.state
        console.log("User authenticated: ", authenticated)
        authenticated ? this.setState({isSubmitPanelVisible: true}) : this.setState({isCreateAccountPromptVisible: true})
    }

    toggleABoolean = (e, propToChange) => { 
        switch (propToChange) {
            case "isSubmitPanelVisible":
                this.setState({isSubmitPanelVisible: false})
                break
            case "isCreateAccountPromptVisible":
                this.setState({isCreateAccountPromptVisible: false})
                break
            // case "license":
            //   this.setState({license: event.target.value})
            //   break
            default: 
                console.log("toggleABoolean() switch statement originating in MainPage.js had no matching cases.")
        }
    }

    updateHTML = (newValue) => {
        this.setState({userHTML: newValue})
    }

    updateCSS = (newValue) => {
        this.setState({userCSS: newValue})
    }

    render() {
        const {
            htmlStart, 
            userCSS, 
            cssEnd, 
            userHTML, 
            htmlEnd, 
            codeIsDisplayed, 
            editorHeight, 
            isSubmitPanelVisible, 
            isCreateAccountPromptVisible, 
            currentUser, 
            authenticated, 
            goToSignupPage, 
            styleSearchField, 
        } = this.state

        MainPageRenderLogs(state, props, currentUser, authenticated, userHTML, userCSS)
        return (
            <div className="mainPage">
                <TriangleSvg />
                <div className="display">
                    <iframe 
                        title="mainIframe" 
                        className="iframeWindow" 
                        srcDoc={htmlStart + userCSS + cssEnd + userHTML + htmlEnd}
                    >
                    </iframe>
                    <div className="iframeButtonPanel">
                        <button 
                            className="toggleCodeButton" 
                            onClick={() => this.toggleCode()}
                        >
                            Toggle Code
                        </button>
                    </div>
                    <h3 
                    className="languageHeader htmlHeader">HTML</h3>
                    <h3 className="languageHeader cssHeader">CSS</h3>
                    <div 
                        className="editorWrapper" 
                        style={codeIsDisplayed ? editorHeight[0] : editorHeight[1]}
                    >
                        <Ace 
                            {...this.state} 
                            className="editor" 
                            val={userHTML} 
                            mode={'html'} 
                            updateFunction={this.updateHTML} 
                            theme={'github'} 
                            name={'htmlEditor'}
                        />
                        <Ace 
                            {...this.state} 
                            className="editor" 
                            val={userCSS} 
                            updateFunction={this.updateCSS} 
                            mode={'css'} 
                            theme={'github'} 
                            name={'cssEditor'}
                        />
                    </div>
                    <button    
                        className="postButton"              
                        onClick={()=>this.handlePostClick()}
                    >
                        Post
                    </button>
                    <TextField 
                        className="styleSearchField"        
                        onChange={(e)=>this.updateSearchField(e)}
                        >
                            {styleSearchField}
                    </TextField>
                    <button    
                        className="submitStyleSearchButton" 
                        onClick={()=>this.submitStyleSearch()}
                    >
                        search
                    </button>
                    {isSubmitPanelVisible && (
                        <SubmitForm 
                            toggleABoolean={this.toggleABoolean} 
                            currentUser={currentUser} 
                            userCSS={userCSS} 
                            userHTML={userHTML}
                        />
                    )}
                    {isCreateAccountPromptVisible && (
                        <CreateAccountPrompt 
                            toggleABoolean={this.toggleABoolean} 
                            goToSignupPage={goToSignupPage}
                        />
                    )}
                <div className="styleGrid">
                    <h1 className="recentlyAdded">Recently Added</h1>
                    {recentlyAdded.map((style, index) => <MiniCard {...this.state} isUsersOwnStyle={false}/>)}
                    {authenticated && <h1 className="recentlyAdded">Your Recent Styles</h1> }


                </div>
                
            </div>
                
                
                {/* <TriangleSvg /> */}
            </div>
        )
    }
  
  }
//   updateFunction={this.updateHTML}

  export default MainPage

