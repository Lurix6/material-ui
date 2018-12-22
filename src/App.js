import React, { Component } from 'react';
import AppBar from './components/header'
import AppDrawer from './components/drawer'
import AppButtons from './components/buttons'
import AppList from './components/list'
import Popover from '@material-ui/core/Popover'
import AppForm from './components/form'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import Snackbar from '@material-ui/core/Snackbar';

const styles = () => ({
  popover: {
    width: '150px',
    padding: '15px 30px',

  },
  grid: {
    marginTop:'10px'
  }
});

class App extends Component {


  state = {
      isDrawerOpen: false,
      isPopoverOpen: false,
      isModalOpen: false,
      isSnackbarOpen: false,
      popoverElement: null,
      selectedDate: '2018-01-01T00:00:00.000Z',
      itemsList: [
        {
          name: 'element1',
          description: 'some description',
          checked: true
        },
        {
          name: 'element2',
          description: 'some description',
          checked: true
        },
        {
          name: 'element3',
          description: 'some description',
          checked: false
        },
        {
          name: 'element4',
          description: 'some description',
          checked: false
        },
      ]

  }

  render() {
    const {classes} = this.props
    const { selectedDate } = this.state;

    return (
      <div>
        <AppDrawer isDrawerOpen={this.state.isDrawerOpen} onToggle={(isDrawerOpen) => this.setState({isDrawerOpen})}/>
        <AppBar driwerOpen={() => this.setState({isDrawerOpen: true})} />
        <div className='container'>
          <AppButtons
              itemChecked={this.state.itemsList.map(i => i.checked).filter(i => i)}
              onDelate={() => {
                let itemsList = this.state.itemsList.filter(i => !i.checked)
                this.setState({
                  itemsList
                })
              }}
              onAdd={(popoverElement)=> {this.setState({popoverElement,isPopoverOpen: true })}}
              openModal={() => {this.setState({isModalOpen: true})}}
              />
              <Popover
               classes={{
                 paper:classes.popover}}
               open={this.state.isPopoverOpen}
               anchorEl={this.state.popoverElement}
               onClose={()=>{this.setState({isPopoverOpen: false})}}
               anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'center',
               }}
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'center',
               }}

             >
               <AppForm
                  onAdd={this.onAdd}
                />
             </Popover>

          <AppList
              items={this.state.itemsList}
              onCheck={(idx) => {
                let {itemsList} = this.state
                itemsList[idx].checked = !this.state.itemsList[idx].checked
                this.setState({ itemsList })
              }}
          />
        </div>
        <Dialog
          open={this.state.isModalOpen}
          onClose={() => {this.setState({isModalOpen: false})}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            label="Basic example"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling
            mode='landscape'
          />
          </Grid>
        </MuiPickersUtilsProvider>
          <DialogTitle >{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={() => {this.setState({isModalOpen: false})}} color="primary">
              Disagree
            </Button>
            <Button onClick={() => {this.setState({isModalOpen: false})}} color="primary" autoFocus>
              Agree
            </Button>

          </DialogActions>
        </Dialog>
        <Snackbar
         anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'left',
         }}
         open={this.state.isSnackbarOpen}
         autoHideDuration={3000}
         onClose={() => {this.setState({isSnackbarOpen: false})}}

         message={<span id="message-id">{''+this.state.selectedDate}</span>}
       />
      </div>
    );
  }


  handleDateChange = date => {
      this.setState({ selectedDate: date, isSnackbarOpen: true });
    };


  onAdd = (item) => {
    let itemsList = this.state.itemsList

    itemsList.push(item)
    this.setState({ isPopoverOpen: false, itemsList})

  }


}

export default withStyles(styles)(App);
