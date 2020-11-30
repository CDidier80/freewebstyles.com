import React, { Component } from 'react'
import '../styles/LandingPage.css'
import TriangleSvg from "../components/landing-components/TriangleSvg.js"
import Avatar from '@material-ui/core/Avatar';

export default class UserProfile extends Component {
  // console.log(children)
  constructor(props){
    super(props)
    this.state = {
        // props from App.js 
        toggleAuthenticated: props.toggleAuthenticated,
        verifyTokenValid: props.verifyTokenValid,
        authenticated: props.authenticated,
        currentUser: props.currentUser,
        //
        eventTarget: "",
        username: "",
        email: "",
        password: ""
    }
  }

//   componentDidMount = () => {
//     console.log("componentDidMount() fired in SignupPage.js")
//     if(this.state.loginPageDefault === "") {
//       this.setState({loginPageDefault: "signUpLink"})
//     }
//   }

//   activateForm = (e) => {
//     e.preventDefault() 
//     console.log('clicked')
//       this.setState({eventTarget: e.target.className})
//     }

//   goToMainPage = () => {
//     this.props.history.push('/main')
//   }

//   submitSignUp = (e) => {
//     const formData = {username: this.state.username, email: this.state.email, password: this.state.password}
//     CreateUserService(formData)
//   }

//   submitLogIn = async (e) => {
//     // console.log('submitLogin() fired')
//     const {toggleAuthenticated, email, password} = this.state
//     e.preventDefault()
//     const formData = {email: email, password: password}
//     // console.log("formData sent to back-end: ", formData)
//     const responseData =  await LoginUserService(formData)
//     // console.log("Response received: ",responseData)
//     // console.log("Username received as part of responseData: ", responseData.user.username)
//     toggleAuthenticated(true, responseData.user.username, ()=>this.props.history.push('/main'))
//   }

//   updateField = (event, fieldToUpdate) => {
//     switch (event.target.id) {
//       case "username":
//         this.setState({username: event.target.value})
//         break
//       case "email":
//         this.setState({email: event.target.value})
//         break
//       case "password":
//         this.setState({password: event.target.value})
//         break
//       default: 
//         console.log('updateField() switch statement originating in LandingPage.js had no matching cases.')
//     }
//   }
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>

      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">{row[0]}</TableCell>
        <TableCell align="center">{row[1]}</TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon  /> : <EditIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases"></Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };



export default function CollapsibleTable() {
  const [open, setOpen] = React.useState(false);
  const rows = [
    ['Username', "example801"],
    ['Email Address', "sample@gmail.com"],
    ['Password', "*******"]
  ]
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row, index) => (
            <Row key={`${row}${index}`} row={row} />
          ))}
          <TableRow>
            <TableCell component="th" scope="row">Delete Account</TableCell>
            <TableCell>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon  /> : <EditIcon />}
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

  render() {
    console.log('///////////////////////////RENDER USERPROFILE.JS BELOW//////////////////////////////////////')
    return (
        <div className="userProfile">
            <TriangleSvg />
            <Avatar />
            <div className="accountSquare">
    
            </div>
            <div className="styleSquare">
              <p>In Development</p>
            </div>
        </div>
    )
  }
}

