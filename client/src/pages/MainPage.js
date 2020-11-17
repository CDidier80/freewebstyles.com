import React, { Component } from 'react'
import '../styles/MainPage.css'
import { GetOneStyleService, GetManyRecentStylesService, GetManyUsersRecentStylesService, GetManyUsersLikedStylesService, EditStyleService, DeleteStyleService} from '../services/StyleService.js'
import Ace from "../components/main-page-components/editors/Ace.js"
import MiniCard from "../components/main-page-components/MiniCard.js"
import SubmitForm from "../components/main-page-components/SubmitForm.js"
import CreateAccountPrompt from "../components/main-page-components/CreateAccountPrompt.js"
import { TextField } from '@material-ui/core'
import TriangleSvg from '../components/landing-components/TriangleSvg'
// import TriangleSvg from "../components/landing-components/TriangleSvg.js"



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
            usersLikedStyles: [],
            styleSearchField: "",
            testBoolean: true,
            usersRecentStyles: [],
            recentlyAddedStyles: []
        }
    }


    // load styles to be displayed in the various main page sections
    componentDidMount = async() => {
        const {currentUser, authenticated} = this.state
        try {
            const recentStyles = await GetManyRecentStylesService(authenticated ? 6 : 9)
            const [usersRecent, usersLiked] = await authenticated ? async () => {
                const usersRecentStyles = await GetManyUsersRecentStylesService(currentUser, 6)
                const usersLikedStyles = await GetManyUsersLikedStylesService(currentUser, 6)
                return [usersRecentStyles, usersLikedStyles]} 
                :
                [[], []]
            this.setState({recentlyAddedStyles: recentStyles, usersRecentStyles: usersRecent, usrsLikedStyles: usersLiked})
        } catch (error) {
            console.log("Error raised in componentDidMount of MainPage.js:")
            console.log(error)
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

    // checks whether code is currently displayed and updates the state to the opposite boolean
    // at re-rendering, the editor wrapper div checks the boolean and sets the correct max-height
    toggleCode = () => {        
        this.state.codeIsDisplayed === true ? this.setState({codeIsDisplayed: false}) : this.setState({codeIsDisplayed: true})
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
        // console.log("updateHTML reached")
        this.setState({userHTML: newValue})
    }

    updateCSS = (newValue) => {
        // console.log("updateCSSreached")
        this.setState({userCSS: newValue})
    }

    render() {
        const {htmlStart, userCSS, cssEnd, userHTML, htmlEnd, codeIsDisplayed, editorHeight, isSubmitPanelVisible, 
            isCreateAccountPromptVisible, currentUser, authenticated, goToSignupPage, styleSearchField, recentlyAddedStyles, usersLikedStyles, usersRecentStyles} = this.state
        // console.log("The state of MainPage at render: ", this.state)
        // console.log("this.props of MainPage at rendering: ", this.props)
        // console.log("Current User: ", currentUser)
        // console.log("Authenticated: ", authenticated)
        // console.log("new HTML value: ", userHTML)
        // console.log("new CSS value: ", userCSS)
        // console.log(typeof userHTML)
        console.log(recentlyAddedStyles)
        console.log('/////////////////////////////////////////////////////////////////')
        return (
            <div className="mainPage">
                <TriangleSvg />
                <div className="display">
                    <iframe title="mainIframe" className="iframeWindow" srcDoc={htmlStart + userCSS + cssEnd + userHTML + htmlEnd}></iframe>
                    <div className="iframeButtonPanel">
                        <button className="toggleCodeButton" onClick={() => this.toggleCode()}>Toggle Code</button>
                    </div>
                    <h3 className="languageHeader htmlHeader">HTML</h3>
                    <h3 className="languageHeader cssHeader">CSS</h3>
                    <div className="editorWrapper" style={codeIsDisplayed ? editorHeight[0] : editorHeight[1]}>
                        <Ace {...this.state} className="editor" val={userHTML} mode={'html'} updateFunction={this.updateHTML} theme={'github'} name={'htmlEditor'}/>
                        <Ace {...this.state} className="editor" val={userCSS} updateFunction={this.updateCSS} mode={'css'} theme={'github'} name={'cssEditor'}/>
                    </div>
                    <button className="postButton" onClick={()=>this.handlePostClick()}>Post</button>
                    <TextField className="styleSearchField" onChange={(e)=>this.updateSearchField(e)}>{styleSearchField}</TextField>
                    <button className="submitStyleSearchButton" onClick={()=>this.submitStyleSearch()}>search</button>
                    {isSubmitPanelVisible ? <SubmitForm toggleABoolean={this.toggleABoolean} currentUser={currentUser} userCSS={userCSS} userHTML={userHTML}/> : null}
                    {isCreateAccountPromptVisible ? <CreateAccountPrompt toggleABoolean={this.toggleABoolean} goToSignupPage={goToSignupPage}/> : null}

                {/* <h1 className="test">{userHTML}</h1> */}
                <div className="styleGrid">
                    <h1 className="recentlyAdded">Recently Added</h1>
                    {recentlyAddedStyles.map((style, index) => <MiniCard {...this.state} styleToDisplay={style} isUsersOwnStyle={false}/>)}
                    {authenticated ? <h1 className="usersRecentStyles">Your Recent Styles</h1> : null}
                    {authenticated ? usersRecentStyles.map((style, index) => <MiniCard {...this.state} styleToDisplay={style} isUsersOwnStyle={true}/>) : null}
                    {authenticated ? <h1 className="recentlyAdded">Styles You Liked</h1> : null}
                    {authenticated ? usersRecentStyles.map((style, index) => <MiniCard {...this.state} styleToDisplay={style} isUsersOwnStyle={true}/>) : null}
                </div>
                
            </div>
                
                
                {/* <TriangleSvg /> */}
            </div>
        )
    }
}


  export default MainPage

