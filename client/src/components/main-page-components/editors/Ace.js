import React, {Component} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-idle_fingers"; 

export default class Ace extends Component {
    constructor(props){
      super(props)
      this.state = {
          mode: this.props.mode,
          theme: "idle_fingers",
          name: props.name,
          updateFunction: props.updateFunction,
          bla: props.bla,
          message: props.message, 
          testBoolean: props.testBoolean
      } 
    }
  
    render() {
      const {mode, theme, name, updateFunction} = this.state
      return (
        <AceEditor mode={mode} theme={theme} onChange={updateFunction} name={name} value={name === "htmlEditor" ? this.props.userHTML : this.props.userCSS } editorProps={{ $blockScrolling: true}} />
      )}
}
  
// OPTIONAL FUTURE THEMES
// import "ace-builds/src-noconflict/theme-terminal";  //dark and red
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";  //similar to pycore
// import "ace-builds/src-noconflict/theme-solarized_dark"; // slightly lighter blues than pycore
// import "ace-builds/src-noconflict/theme-mono_industrial"; //sleek black/gray/greenish like a dark pycharm
// import "ace-builds/src-noconflict/theme-cobalt"; // dark blue theme with dark mediterrenean colors