import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import tagOptions from '../../data-exports/allTagOptions'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/SubmitForm.css'

import IconButton from '@material-ui/core/IconButton';
// import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ClearIcon from '@material-ui/icons/Clear';
import { NavLink } from 'react-router-dom';


export default class SubmitForm extends Component {
    constructor(props){
        super(props)
        // console.log(this.props.userCSS)
        this.state = {
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
            userID: ""


        }
    }
    
    goToSignupPage = (e) => {
        e.stopPropagation()
        this.props.history.push('/SignUp')
    }

    render() {
        // removed from MenuItems: style={getStyles(name, personName, theme)}
        // removed from Select: input={<Input />}  onChange={handleChange} 
        // MUST PUT IN A HANDLE CHANGE FOR SELECT
        // select documentation: https://material-ui.com/components/selects/#select
        
        const {styleName, tags, tagOptions, sourceLinks, toggleABoolean, dense, sourceCount, tagOneValue, tagTwoValue, tagThreeValue} = this.state
        return (
            <div className="customBackdrop" id="backdrop" onClick={(e) => toggleABoolean(e, "isCreateAccountPromptVisible")}>
                    <p className="pTagPrompt">Sign in to share your style!</p>

                    <NavLink className="linkToSignUp" onClick={(e)=>this.goToSignupPage(e)}>Sign In</NavLink>
                    <NavLink className="linkToSignUp" onClick={(e)=>this.goToSignupPage(e)}>Create Account</NavLink>
            </div>




            
        )
    }        
}
