import React, { Component } from 'react';
import AppBar from './components/header'
import AppDrawer from './components/drawer'
import AppButtons from './components/buttons'
import AppList from './components/list'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      isDrawerOpen: false,
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
  }

  render() {
    return (
      <div>
        <AppDrawer isDrawerOpen={this.state.isDrawerOpen} onToggle={(isDrawerOpen) => this.setState({isDrawerOpen})}/>
        <AppBar driwerOpen={() => this.setState({isDrawerOpen: true})} />
        <div className='container'>
          <AppButtons />

          <AppList items={this.state.itemsList} />
        </div>
      </div>
    );
  }


}

export default App;
