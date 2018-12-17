import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


class AppList extends React.Component {
  state = {
   checked: []
 };

 handleToggle = value => () => {
   const { checked } = this.state;
   const currentIndex = checked.indexOf(value);
   const newChecked = [...checked];

   if (currentIndex === -1) {
     newChecked.push(value);
   } else {
     newChecked.splice(currentIndex, 1);
   }

   this.setState({
     checked: newChecked,
   });
 };


  render(){


        return(
          <List >
      {this.props.items.map((value, key) => (
        <ListItem key={key} role={undefined} dense button onClick={this.handleToggle(value)}>
          <Checkbox
            checked={this.state.checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={value.name} secondary={value.description} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Comments">
              <CommentIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )}

  getCheckedIndex = () => {

    const mas = this.props.items
    return [mas.filter(el => el.checked)]


  }
}



export default AppList
