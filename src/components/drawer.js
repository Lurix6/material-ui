import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import TabIcon from '@material-ui/icons/Tab'
import {teal, grey} from '@material-ui/core/colors/'


const styles = theme => ({
  root: {
    padding:'10px',
    background: teal[200],
    flexDirection: 'row-reverse',
    '&:hover': {
      background: grey[300],
      color: teal[300]

    }}});


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


class AppDrawer extends React.Component{

  render(){
    const { isDrawerOpen, onToggle }  = this.props
    const { classes } = this.props


      return(
        <Drawer
            open={isDrawerOpen}
            onClose={() => onToggle(false)}
        >
        <List component="nav">
               <ListItem button  className={classes.root}>
                 <Icon>inbox</Icon>
                 <ListItemText primary="Inbox" />
               </ListItem>
               <ListItem button>
                 <ListItemIcon>
                   <DraftsIcon />
                 </ListItemIcon>
                 <ListItemText primary="Drafts" />
               </ListItem>
               <ListItem button>
                <ListItemIcon>
                  <Icon className={classes.icon}>list</Icon>
                </ListItemIcon>
                <ListItemText primary="List" />
               </ListItem>
               <ListItem button>
                <ListItemIcon>
                    <Icon>subject</Icon>
                </ListItemIcon>
                <ListItemText primary="subject" />
               </ListItem>
               <ListItem button>
                <ListItemIcon>
                  <TabIcon />
                </ListItemIcon>
                <ListItemText primary="subject" />
               </ListItem>
             </List>
             <Divider />
             <List component="nav">
               <ListItem button>
                 <ListItemText primary="Trash" />
               </ListItem>
               <ListItemLink href="#simple-list">
                 <ListItemText primary="Spam" />
               </ListItemLink>
            </List>
        </Drawer>

      )
    }
}

export default withStyles(styles)(AppDrawer);
