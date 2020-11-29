import React, { Component } from 'react'
import { EditOneStyleService, PostStyleService } from '../../services/StyleService.js'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import tagOptions from '../../js-exports/allTagOptions'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/SubmitForm.css'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ClearIcon from '@material-ui/icons/Clear';


export default class SubmitForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: props.currentUser,
            toggleABoolean: props.toggleABoolean,
            userCSS: props.userCSS,
            userHTML: props.userHTML,
            open: true,
            styleName: '',
            license: "",
            tagOptions: tagOptions.allTagOptions,
            sourceLinks: [],
            dense: false,
            tagOneValue: "",
            tagTwoValue: "",
            tagThreeValue: "",
            userID: ""
        }
    }

    updateField = (event, fieldToUpdate) => {
        switch (event.target.id) {
            case "styleName":
                this.setState({styleName: event.target.value})
                break
            case "tags":
                this.setState({tags: [...event.target.value]})
                break
            case "license":
                this.setState({license: event.target.value})
                break
            default:
                console.log("updateField() switch statement originating in SubmitForm.js subcomponent had no matching cases.")
        }
    }
    
    closeBackdrop = () => {
        this.setState({open: false})
    }

    pickTag = (e, number) => {
        console.log("e: ", e)
        const newValue = e.target.getAttribute("data-value")
        switch (number) {
            case 1:
                this.setState({tagOneValue: newValue})
                break
            case 2:
                this.setState({tagTwoValue: newValue})
                break
            case 3:
                this.setState({tagThreeValue: newValue})
                break
            default:
                console.log("pickTag() switch statement originating in SubmitForm.js subcomponent had no matching cases.")
        }
    }

    addSourceLink =  () => this.setState((prevState) => ({sourceLinks: [...prevState.sourceLinks, ""]}))

    removeSourceLink = async() => await this.setState((prevState) => {
        console.log(prevState.sourceLinks)
        let sourceLinksCopy = prevState.sourceLinks
        sourceLinksCopy.pop()
        console.log(sourceLinksCopy)
        return ({sourceLinks: [...sourceLinksCopy]})
    })

    submitStyle = async (e) => {
        e.preventDefault()
        const {tagOneValue, tagTwoValue, tagThreeValue, userCSS, userHTML, styleName, currentUser, toggleABoolean} = this.state
        const chosenTags = []
        const tags = [tagOneValue, tagTwoValue, tagThreeValue]
        tags.forEach ((tag)=>{
            if (tag !== "") {
                chosenTags.push(tag)
            }
        })
        const requestBody = {html: userHTML, css: userCSS, username: currentUser, style_name: styleName, tags: chosenTags}
        console.log("Request Body: ", requestBody)
        try {
            const StylePostResponse = await PostStyleService(requestBody)
            console.log(StylePostResponse)
        } catch (error) {
            console.log(error, "This error was thrown in the submitStyle() function of SubmitForm.js")
        }
        toggleABoolean(e, "isSubmitPanelVisible")

    }

    editOneStyle = async (e) => {
        e.preventDefault()
        const {tagOneValue, tagTwoValue, tagThreeValue, toggleABoolean, styleName} = this.state
        const chosenTags = []
        const tags = [tagOneValue, tagTwoValue, tagThreeValue]
        tags.forEach ((tag)=>{
            if (tag !== "") {
                chosenTags.push(tag)
            }
        })
        const requestBody = {style_name: styleName, tags: chosenTags}
        console.log("Request Body: ", requestBody)
        console.log(this.props.styleNameToEdit)
        try {
            const EditStyleResponse = await EditOneStyleService(requestBody, this.props.styleNameToEdit)
            console.log(EditStyleResponse)
        } catch (error) {
            console.log(error, "This error was thrown in the editOneStyle() function of SubmitForm.js")
        }
        toggleABoolean(e, "isSubmitPanelVisible")
        }
    
    render() {
        const {styleName, tags, tagOptions, sourceLinks, toggleABoolean, dense, sourceCount, tagOneValue, tagTwoValue, tagThreeValue} = this.state
        console.log("styleName value at render: ", styleName)
        return (
            <div className="customBackdrop" id="backdrop" onClick={(e) => toggleABoolean(e, "isSubmitPanelVisible")}>
                <form className={'form'} onClick={(e)=>e.stopPropagation()}>
                    <p className="formTitle">{this.props.isEditMode ? "Edit Your Style" : "Add Your Style" } </p>
                    <TextField variant="outlined" margin="normal" required fullWidth id="styleName" label="Choose a name for your style" name="styleName" autoFocus onChange={(e)=>this.updateField(e, 'styleName')}/>
                    <div className="tagContainer">
                        <p className="threeTagsText">Choose up to 3 tags</p>
                        <Select variant="filled" className="tagSelectors" labelId={"Tag #1"} id={"Tag #1"} value={tagOneValue}>
                            {tagOptions.map((option, index) => (<MenuItem key={`TagOne${option}`} value={option} className={"Tag #1"} onClick={(e)=>this.pickTag(e, 1)}>{option}</MenuItem>))}  
                        </Select>
                        <Select variant="filled" className="tagSelectors" labelId={"Tag #2"} id={"Tag #2"} value={tagTwoValue}>
                            {tagOptions.map((option, index) => (<MenuItem key={`TagTwo${option}`} value={option} className={"Tag #2"} onClick={(e)=>this.pickTag(e, 2)}>{option}</MenuItem>))} 
                        </Select>
                        <Select variant="filled" className="tagSelectors" labelId={"Tag #3"} id={"Tag #3"} value={tagThreeValue}>
                            {tagOptions.map((option, index) => (<MenuItem key={`TagThree${option}`} value={option} className={"Tag #3"} onClick={(e)=>this.pickTag(e, 3)}>{option}</MenuItem>))} 
                        </Select>
                    </div>
                    <div className="creditOriginalWrapper">
                        <p className="creditInstructions">Link to any non-original open source code you used.</p>
                        <Fab size='small' color="primary" aria-label="add" className="addLinkButton" onClick={()=>this.addSourceLink()}>
                            <AddIcon />
                        </Fab>
                    </div>
                    {sourceLinks.length > 0 ?                     
                        <List dense={dense}>
                            {sourceLinks.map((link, index) => (
                                <ListItem key={index}>
                                    <TextField id="outlined-basic" label="Add URL" variant="outlined" />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete" onClick={()=>this.removeSourceLink()}>
                                            <ClearIcon size='small'/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    : null}
                <button className="submitFormButton" onClick={this.props.isEditMode ? (e) => this.editOneStyle(e) : (e)=>this.submitStyle(e)}>Submit</button>
                </form>
            </div> 
        )
    }        
}
