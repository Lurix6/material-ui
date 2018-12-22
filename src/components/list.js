import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Icon from '@material-ui/core/Icon'
import { withStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'


const styles = {
  root: {
    color: green[600],
  },
  checked: {
    color: green[100],

  },
};

class AppList extends React.Component {

  render(){
      const { classes } = this.props
        return(
          <List >
            {this.props.items.map((value, index) => (
              <div>
                <ListItem key={index} role={undefined} dense button onClick={() => this.props.onCheck(index)}>
                  <Checkbox
                    icon={<Icon>mood_bad</Icon>}
                    checkedIcon ={<Icon>mood</Icon>}
                    checked={value.checked}
                    tabIndex={-1}
                    disableRipple
                    classes={{
                      root: classes.root,
                      checked: classes.checked, // Не працює ???????/
                    }}
                  />
                  <ListItemText primary={value.name} secondary={value.description} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Comments">
                      <CommentIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                </div>
            ))}
    </List>
  )}
}



export default withStyles(styles)(AppList)
