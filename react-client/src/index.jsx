import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';
import Map from './components/Map.jsx';
import MeetUpForm from './components/MeetUpForm.jsx';
import Title from './components/Title.jsx';
import LoginViewController from './components/LoginViewController.jsx';
import sampleData from './sampleData.js';
const io = require('socket.io-client');
const socket = io();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: sampleData,
      auth: true,
      meetingLocations: sampleData.sampleData
    };
  }

  handleClick(item) {
    console.log(item);
  }

  componentDidMount() {
    socket.on('meeting locations', (data) => {
      console.log('data', data);
      this.setState({ meetingLocations: data });
    })
  }

  render () {
    return (
      <div>
        {/*<LoginViewController items={this.state.items} isLoggedIn={this.state.auth}/>*/}
        <Title /> 
        <MeetUpForm />
        <div style={{width:500, height:600, backgroundColor:'red', border: '2px solid black'}}>
          <Map
            markers={ this.state.meetingLocations }
            center={{ lat: 40.751094, lng: -73.987597 }}
            containerElement={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'%'}} />}
          />
        <List items={ this.state.meetingLocations } />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));