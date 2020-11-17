import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        www.freewebstyles.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const landingStyles = makeStyles((theme) => ({
  root: {
    "background-color": "rgba(255,255,255,.4)",
    height: '100vh',
    width: '35vw',
    position: "absolute", 
    right: 0,
  },
  transparentWhite: {
    "background-color": "rgba(255,255,255,.4)",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,.4)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "background-color": "rgba(255,255,255)",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    "background-color": "#2196F3",
    "font-weight": "bold"

  },
}));

const signupStyles = makeStyles((theme) => ({
  root: {
    "background-color": "rgba(255,255,255,.4)",
    height: '100vh',
    width: '45vw',
    position: "absolute", 
    left: "50%",
    transform: "translate(-50%, 0)"
  },
  transparentWhite: {
    "background-color": "rgba(255,255,255,.4)",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,.4)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "background-color": "rgba(255,255,255)",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    "background-color": "#2196F3",
    "font-weight": "bold"

  },
}));

export default function LogInForm(props) {
  const styleChoice = props.styleChoice
  const classes = styleChoice === "landingStyles" ? landingStyles() : signupStyles()
  const {panelState, updateField, formSubmit} = props
  let isSigningUp = panelState === "signupLink" ? true : false
  return (
    <Grid container className={classes.root}>
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}

      <Grid component={Paper} square className={classes.paperRoot}>

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
          <Typography component="h1" variant="h5">{isSigningUp ? "Sign Up": "Sign in"}</Typography>

          <form className={classes.form} noValidate>
            {isSigningUp ? <TextField variant="outlined" margin="normal" required fullWidth id="username" label="Choose Username" name="username" onChange={(e)=>updateField(e, 'username')} autoFocus/> : null}
            <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={(e)=>updateField(e, 'email')}/>
            <TextField variant="outlined" margin="normal" required fullWidth id="password" label={isSigningUp ? "Choose Password" : "Password"} name="password" onChange={(e)=>updateField(e, 'password')} autoComplete="current-password" type="password" autoFocus/>
            <FormControlLabel control={<Checkbox value="remember" color="primary" />}label="Remember me"/>
            <Button type="button" onClick={(e)=>formSubmit(e)} fullWidth variant="contained" color="primary" className={classes.submit}>{isSigningUp ? "CONFIRM AND SIGN IN" : "SIGN IN"}</Button>
              {/* <Grid item xs>
                <Link href="#" variant="body2">Forgot password?</Link>
              </Grid> */}
            {!isSigningUp ? <Link href="#" variant="body1">{"Don't have an account? Sign Up"}</Link> : null}
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}