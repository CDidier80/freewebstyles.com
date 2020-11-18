import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Icon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "position": "relative",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  subframe : {
    width: "90%",
    border: "0px",
    "border-radius": ".5rem",
    "box-shadow": "0 0 13px black",

  },
  avatar: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    "font-size": "1rem",
  },

  expandIcon: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    color: "white",
    "box-shadow": "0 0 2px black"
  }
}));

const MiniCard = (props) => {
  const {css, html, style_name} =  props.styleToDisplay
  const viewInMainIframe = props.updateCode
  const classes = useStyles();

  // commented out code to be implemented soon
  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={<Avatar aria-label="recipe" className={classes.avatar}> FWS </Avatar>}
        // <IconButton />
        action={<IconButton aria-label="settings" className={classes.expandIcon} onClick={()=>viewInMainIframe(html, css)}> <ZoomInIcon /> </IconButton>}
        title={style_name}
        // subheader={`by ${creator}`}
        />
      <iframe title="sub" className={classes.subframe} srcDoc={props.htmlStart + css + props.cssEnd + html + props.htmlEnd}></iframe>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {props.isUsersOwnStyle ?  
          <IconButton aria-label="edit style">
            <EditIcon onClick={(e)=> props.toggleABoolean(e, "makeSubmitPanelVisible", style_name)} />
          </IconButton> 
          : null
        }
        {props.isUsersOwnStyle ?  
          <IconButton aria-label="delete style">
            <DeleteIcon onClick={()=>props.deleteOneStyle(style_name)} />
          </IconButton>
          : null
        }
      </CardActions>
    </Card>
  );
}

export default MiniCard
