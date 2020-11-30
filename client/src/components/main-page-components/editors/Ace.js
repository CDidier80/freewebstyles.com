import React, {Component} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-idle_fingers"; 



const options = {
// EDITOR OPTIONS

    "selectionStyle": "line"|"text",
    "highlightActiveLine": true|false,
    "highlightSelectedWord": true|false,
    "readOnly": true|false,
    "cursorStyle": "ace"|"slim"|"smooth"|"wide",
    "mergeUndoDeltas": false|true|"always",
    "behavioursEnabled": "boolean",
    "wrapBehavioursEnabled": "boolean",
    // this is needed if editor is inside scrollable page
    "autoScrollEditorIntoView": "boolean", // defaults to false
    // copy/cut the full line if selection is empty, defaults to false
    "copyWithEmptySelection": "boolean" ,
    "useSoftTabs": "boolean", // defaults to false,
    "navigateWithinSoftTabs": "boolean", // defaults to false
    "enableMultiselect": "boolean"  ,

  // RENDERER OPTIONS
    "hScrollBarAlwaysVisible": "boolean",
    "vScrollBarAlwaysVisible": "boolean",
    "highlightGutterLine": "boolean",
    "animatedScroll": "boolean",
    "showInvisibles": "boolean",
    "showPrintMargin": "boolean",
    "printMarginColumn": "number" , //defaults to 80 
    // shortcut for showPrintMargin and printMarginColumn
    "printMargin": "false"|"number", 
    "fadeFoldWidgets": "boolean",
    "showFoldWidgets": "boolean", // defaults to true
    "showLineNumbers": "boolean", // defaults to true
    "showGutter": "boolean, // defaults to true",
    "displayIndentGuides": "boolean", // defaults to true
    "fontSize": "number or css font-size string",
    fontFamily: "font family",
    // resize editor based on the contents of the editor until the number of lines reaches maxLines
    "maxLines": "number",
    "minLines": "number",
    // number of page sizes to scroll after document end (typical values are 0, 0.5, and 1)
    "scrollPastEnd": "number"|"boolean",
    "fixedWidthGutter": "boolean", // defaults to false
    "theme": `path to a theme e.g "ace/theme/textmate" `,

    // mouseHandler options
    "scrollSpeed": "number",
    "dragDelay":  "number",
    "dragEnabled": "boolean (defaults to true)",
    "focusTimout": "number",
    "tooltipFollowsMouse": "boolean",
}


export default class Ace extends Component {
    constructor(props){
      super(props)
      this.state = {
          mode: this.props.mode,
          theme: "idle_fingers",
      } 
    }
  
    styles = {
      // maxHeight: {this.props.codeIsDisplayed ? }, 
      width: "50%",
    }

    render() {
      const {mode, theme} = this.state, {name, updateFunction, userHTML, userCSS} = this.props
      return (
        <AceEditor style={this.styles} setOptions={{wrapBehavioursEnabled: true, animatedScroll: true}} mode={mode} theme={theme} onChange={updateFunction} name={name} value={name === "htmlEditor" ? userHTML : userCSS } editorProps={{ $blockScrolling: true}} />
      )}
}
  
// OPTIONAL FUTURE THEMES
// import "ace-builds/src-noconflict/theme-terminal";  //dark and red
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";  //similar to pycore
// import "ace-builds/src-noconflict/theme-solarized_dark"; // slightly lighter blues than pycore
// import "ace-builds/src-noconflict/theme-mono_industrial"; //sleek black/gray/greenish like a dark pycharm
// import "ace-builds/src-noconflict/theme-cobalt"; // dark blue theme with dark mediterrenean colors