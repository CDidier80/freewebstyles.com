import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import '../styles/MainPage.css'
import { GetOneStyleService, GetManyRecentStylesService, GetManyUsersRecentStylesService, GetManyUsersLikedStylesService, DeleteOneStyleService} from '../services/StyleService.js'
import Ace from "../components/main-page-components/editors/Ace.js"
import MiniCard from "../components/main-page-components/MiniCard.js"
import SubmitForm from "../components/main-page-components/SubmitForm.js"
import CreateAccountPrompt from "../components/main-page-components/CreateAccountPrompt.js"
import TriangleSvg from '../components/landing-components/TriangleSvg'
const { htmlBoilerplateStart } = require('../components/main-page-components/editors/htmlBoilerplate.js')


class MainPage extends Component {
    constructor(props){
        super(props)
        this.state = {
        //  props from App.js 
            toggleAuthenticated: props.toggleAuthenticated,
            verifyTokenValid: props.verifyTokenValid,
            authenticated: props.authenticated,
            currentUser: props.currentUser,
            goToSignupPage: props.goToSignupPage,
        //
            htmlStart: htmlBoilerplateStart,
            userCSS: ``,
            cssEnd: `</style></head>`,
            userHTML: ``,
            htmlEnd: `</html>`,
            codeIsDisplayed: true,
            editorHeight: [{maxHeight: "300px"}, {maxHeight: "0px"}],
            isSubmitPanelVisible: false, 
            isCreateAccountPromptVisible: false,
            usersLikedStyles: [],
            styleSearchField: ``,
            isEditPanelVisible: true,
            usersRecentStyles: [],
            recentlyAddedStyles: [],
            isEditMode: false,
            styleNameToEdit: ""
        }
    }

    componentDidMount = async() => {
        const {currentUser, authenticated} = this.state
        console.log("currentUser value before getting styles: ", currentUser)
        try {
            const recentStyles = await GetManyRecentStylesService(authenticated ? 6 : 9)
            const usersRecentStyles = authenticated ? await GetManyUsersRecentStylesService(currentUser, 6) : []
            const usersLiked = await authenticated ? GetManyUsersLikedStylesService(currentUser, 6) : []
            const mostRecentStyle = recentStyles[0]
            this.setState({recentlyAddedStyles: recentStyles, usersRecentStyles: usersRecentStyles, usersLikedStyles: usersLiked, userHTML: mostRecentStyle.html, userCSS: mostRecentStyle.css })

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

    clearCode = () => {
        const {userCSS, userHTML} = this.state
        this.setState({userCSS: ``, userHTML: ``})
    }

    updateCode = (html, css) => {
        console.log("clicked")
        this.setState({userHTML: html, userCSS: css})
    }

    handlePostClick = () => {
        const {authenticated} = this.state
        console.log("User authenticated: ", authenticated)
        authenticated ? this.setState({isSubmitPanelVisible: true}) : this.setState({isCreateAccountPromptVisible: true})
    }

    toggleABoolean = (e, propToChange, style_name) => { 
        switch (propToChange) {
            case "isSubmitPanelVisible":
                this.setState({isSubmitPanelVisible: false, isEditMode: false})
                break
            case "makeSubmitPanelVisible":
            this.setState({isSubmitPanelVisible: true, isEditMode: true, styleNameToEdit: style_name})
                break
            case "isCreateAccountPromptVisible":
                this.setState({isCreateAccountPromptVisible: false})
                break
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

    deleteOneStyle = async (style_name) => {
        try {
            const response = await DeleteOneStyleService(style_name)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const {htmlStart, userCSS, cssEnd, userHTML, htmlEnd, codeIsDisplayed, editorHeight, isSubmitPanelVisible, 
            isCreateAccountPromptVisible, currentUser, authenticated, goToSignupPage, recentlyAddedStyles, usersRecentStyles} = this.state
        console.log('/////////////////////////////////////////////////////////////////')

        // commented out code will be implemented soon
        return (
            <div className="mainPage">
                <TriangleSvg />
                <div className="navbar">
                    <div className="titleWrapper">
                        <h1 className="siteTitle">Free Web Styles</h1>
                        <h2 className="subtitle">an open source style library</h2>
                    </div>
                    {/* <TextField className="styleSearchField" label="Search for Styles..."  onChange={(e)=>this.updateSearchField(e)}>{styleSearchField}</TextField>
                    <button className="submitStyleSearchButton" onClick={()=>this.submitStyleSearch()}>search</button> */}
                    <NavLink className="loginNavlink" to="/login">Sign In</NavLink>
                </div>
                <div className="display">
                    <div className="heroWrapper">
                        <iframe title="mainIframe" style={{backgroundColor: "#FFFFFF"}} className="iframeWindow" srcDoc={htmlStart + userCSS + cssEnd + userHTML + htmlEnd} 
                        sandbox={"allow-downloads allow-same-origin allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"}></iframe>
                        <div className="iframeButtonPanel">
                            <button className="toggleCodeButton" onClick={() => this.toggleCode()}>Toggle Code</button>
                            <button className="clearCode" onClick={() => this.clearCode()}>Clear Code</button>
                            <button className="postButton" onClick={()=>this.handlePostClick()}>Post</button>
                        </div>
                        <div className="languageHeaderWrapper">
                            <h3 className="languageHeader htmlHeader">HTML</h3>
                            <h3 className="languageHeader cssHeader">CSS</h3>
                        </div>
                        <div className="editorWrapper" style={codeIsDisplayed ? editorHeight[0] : editorHeight[1]}>
                            <Ace {...this.state} className="editor" val={userHTML} mode={'html'} updateFunction={this.updateHTML} theme={'github'} name={'htmlEditor'}/>
                            <Ace {...this.state} className="editor" val={userCSS} updateFunction={this.updateCSS} mode={'css'} theme={'github'} name={'cssEditor'}/>
                        </div>
                    </div>
                    {isSubmitPanelVisible ? <SubmitForm {...this.state} toggleABoolean={this.toggleABoolean} currentUser={currentUser} userCSS={userCSS} userHTML={userHTML}/> : null}
                    {isCreateAccountPromptVisible ? <CreateAccountPrompt toggleABoolean={this.toggleABoolean} goToSignupPage={goToSignupPage}/> : null}
                <div className="styleGrid">
                    <h1 className="recentlyAddedHeader">Recently Added</h1>
                    {recentlyAddedStyles.map((style, index) => <MiniCard key={`${index}1`} {...this.state} deleteOneStyle={this.deleteOneStyle}  toggleABoolean={this.toggleABoolean} updateCode={this.updateCode} className="recentlyAddedCards" styleToDisplay={style} isUsersOwnStyle={false}/>)}
                    {authenticated ? <h1 className="usersRecentStylesHeader">Your Recent Styles</h1> : null}
                    {authenticated ? usersRecentStyles.map((style, index) => <MiniCard key={`${index}2`} {...this.state} deleteOneStyle={this.deleteOneStyle}  toggleABoolean={this.toggleABoolean} updateCode={this.updateCode} className="usersRecentCards" styleToDisplay={style} isUsersOwnStyle={true}/>) : null}
                    {authenticated ? <h1 className="likedStylesHeader ">Styles You Liked</h1> : null}
                    {authenticated ? usersRecentStyles.map((style, index) => <MiniCard key={`${index}3`} {...this.state} deleteOneStyle={this.deleteOneStyle} toggleABoolean={this.toggleABoolean} updateCode={this.updateCode} className="usersRecentLikes" styleToDisplay={style} isUsersOwnStyle={false}/>) : null}
                </div>
            </div>
        </div>
        )
    }
}


export default MainPage

