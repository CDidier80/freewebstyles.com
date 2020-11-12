import React, { Component } from 'react'
import Ace from "../components/main-page-components/editors/Ace.js"
import '../styles/MainPage.css'

class MainPage extends Component {
    // console.log(children)
    constructor(props){
      super(props)
      this.state = {
          key: "value"
      }
    }
  
    render() {
      return (
        <div className="mainPage">
            <div className="display">
                <iframe className="iframeWindow" srcDoc="<html><body>Hello, <b>WORLD</b>.</body></html>"></iframe>
                <div className="editorWrapper">
                    <Ace className="editor htmlEditor" mode={'html'} theme={'github'} name={'htmlEditor'}/>
                    <Ace className="editor cssEditor" mode={'css'} theme={'github'} name={'cssEditor'}/>
                </div>
            </div>

        </div>
      )
    }
  
  }
  
  export default MainPage