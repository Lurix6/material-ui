import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import cyan from '@material-ui/core/colors/cyan'



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  fab: {
    margin: theme.spacing.unit,
    background: cyan[500],
    '&:hover': {
        background: cyan[700],
    }
  },
});

function AppButtons (props){
  const { classes } = props
  return(
    <div style={{marginBottom:40}}>
        <Button className={classes.button} variant='contained' color='primary' onClick={(event)=> props.onAdd(event.currentTarget)} >Add element</Button>
        <Button className={classes.button} variant='contained' color='secondary' disabled={props.itemChecked.length === 0} onClick={()=> props.onDelate()}>Delate selected element</Button>

        <Button className={classes.button} variant="contained" color="default" onClick={()=> console.log('add Element')}>
          Upload
          <CloudUploadIcon className={classes.rightIcon}/>
        </Button>
        <Fab color="secondary" aria-label="Edit" className={classes.fab} style={{position:'fixed', right:50, bottom:50}} onClick={props.openModal}>
           <Icon>edit_icon</Icon>
        </Fab>
    </div>
  )
}

export default withStyles(styles)(AppButtons)
