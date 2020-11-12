import React, {Component} from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github";


export default class Ace extends Component {
    // inclusion of props depends on whether index.js passes any
    constructor(props){
      super(props)
      this.state = {
          mode: this.props.mode,
          theme: this.props.theme,
          name: this.props.name 
      } 
    }
  
    // Optional - set the initial state or run any other code needed when the component finishes mounting
    // componentDidMount (){
    //   try {
    //       this.setState((prevState) => ({
    //          // set initial state here
    //          ({exampleKey : exampleValue})   
           
    //       }))
    //   } catch (error) {
    //       console.log(error)
    //   }
    // }

    onChange = (newValue) =>  {
      console.log("change", newValue);
    }
  
    render() {
      const {mode, theme, name} = this.state
      return (
        <AceEditor
        mode={mode}
        theme={theme}
        onChange={this.onChange}
        name={name}
        editorProps={{ $blockScrolling: true }}
        />
      )}
}
  
 
  