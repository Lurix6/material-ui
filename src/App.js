import React, { Component } from 'react';
import AppBar from './components/header'
import AppDrawer from './components/drawer'
import AppButtons from './components/buttons'
import AppList from './components/list'
import Popover from '@material-ui/core/Popover'
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
  popover: {
    width: '200px',
    padding: '15px 30px',
    background:'blue'
  },
});

class App extends Component {


  state = {
      isDrawerOpen: false,
      isPopoverOpen: false,
      popoverElement: null,
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
               <h2>Popover</h2>
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
      </div>
    );
  }


}

export default withStyles(styles)(App);
