import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class AppForm extends React.Component {
  constructor(props){
    super(props)

    this.state={
      name: '',
      description: '',
      errors: {
        name: '',
        description: ''
      }
    }
  }

    render(){

      return(<div>
          <TextField
            error={this.state.errors.name}
            helperText={this.state.errors.name}
            name='hello'
            label="Введіть назву"
            fullWidth
            margin="dense"
            placeholder="Назва"
            onChange={(event) => {this.setState({name: event.target.value})}}
        />
          <TextField
            error={this.state.errors.description}
            helperText={this.state.errors.description}
            label="Введіть опис"
            fullWidth
            margin="dense"
            placeholder="Опис"
            onChange={(event) => {this.setState({description: event.target.value})}}
            />
        <Button color="secondary" onClick={this.onAdd} >
          Додати
        </Button>
        </div>

      )
    }

    onAdd = () => {
      let errors = {}

      if(!this.state.name){errors.name = 'Імя не може бути порожнім'}
      if(!this.state.description){errors.description = 'Опис не може бути порожнім'}


      if (errors.name || errors.description) {
        this.setState({errors})
        return
      }

      this.props.onAdd({
        name: this.state.name,
        description: this.state.description,
        checked: false
      })

      this.setState({name:'', description: '',errors: {
        name:'',description:''
      }})

    }

}
