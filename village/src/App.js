import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height:'',
      smurfs: [],

    };
  }

componentDidMount(){

  axios.get(`http://localhost:3333/smurfs`) 
    .then((response) => {
      console.log(response)
      this.setState({smurfs: response.data})
    })
    .catch(err => {console.log(err)
    });
}

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Router>
      <div className="App">
        <SmurfForm />
        
        <Smurfs smurfs={this.state.smurfs} />
      </div>
      </Router>
    );
  }
}

export default App;
