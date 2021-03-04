import React, {Component} from "react";
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/theme-github"
// import "ace-builds/src-noconflict/theme-terminal";  //dark and red
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";  //similar to pycore
// import "ace-builds/src-noconflict/theme-solarized_dark"; // slightly lighter blues than pycore
// import "ace-builds/src-noconflict/theme-mono_industrial"; //sleek black/gray/greenish like a dark pycharm
// import "ace-builds/src-noconflict/theme-cobalt"; // dark blue theme with dark mediterrenean colors
import "ace-builds/src-noconflict/theme-idle_fingers"// dark blue theme with dark mediterrenean colors

export default class Ace extends Component {
    // inclusion of props depends on whether index.js passes any
    constructor(props){
      super(props)
      this.state = {
        
          // props: props,
          mode: this.props.mode,
          // theme: this.props.theme,
          theme: "idle_fingers",
          name: props.name,
          updateFunction: props.updateFunction,
          bla: props.bla,
          message: props.message, 
          testBoolean: props.testBoolean
      } 
    }
  
    render() {
      const {mode, theme, name, updateFunction, bla} = this.state
      console.log(this.props)
      return (
        <AceEditor mode={mode} theme={theme} onChange={updateFunction} name={name} value={name === "htmlEditor" ? this.props.userHTML : this.props.userCSS } editorProps={{ $blockScrolling: true}} />
        // height={this.props.height}
        // width={this.height.width}

      )}
}
  
// onChange={updateFunction}
  