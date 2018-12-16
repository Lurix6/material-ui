import React, { Component } from 'react';
import AppBar from './components/header'
import AppDrawer from './components/drawer'
import AppButtons from './components/buttons'


class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      isDrawerOpen: false
    }
  }

  render() {
    return (
      <div>
        <AppDrawer isDrawerOpen={this.state.isDrawerOpen} onToggle={(isDrawerOpen) => this.setState({isDrawerOpen})}/>
        <AppBar driwerOpen={() => this.setState({isDrawerOpen: true})} />
        <div class='container'>
          <AppButtons />
        </div>
      </div>
    );
  }


}

export default App;
