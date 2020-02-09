import React from 'react';
import { TouchableOpacity, View, Text, Vibration } from 'react-native';
import { Button } from '../components/Button';

export default class LinksScreen extends React.Component {
  handleTurnDeviceOn = async () => {
    fetch('http://13.58.89.149:8000/endpoint/api/onoff/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        turnOnConnection: true,
      }),
    });
  };

  handleTurnDeviceOff = async () => {
    fetch('http://13.58.89.149:8000/endpoint/api/onoff/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        turnOnConnection: false,
      }),
    });
  };

  componentDidMount() {
    this.timer = setInterval(() => this.handleGetRequest(), 5000);
  }

  handleGetRequest = async () => {
    fetch('http://13.58.89.149:8000/endpoint/api/status/', {
      method: 'GET',
      //Request Type
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        if (responseJson[responseJson.length - 1].isDrowsy == true) {
          const DURATION = 5000;

          Vibration.vibrate(DURATION);
          alert('You are falling asleep. Pull over as soon as possible.');
        }
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        console.error(error);
      });
  };

  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity onPress={this.handleTurnDeviceOn.bind(this)}>
          <Button title="Start Monitoring" />
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleTurnDeviceOff.bind(this)}>
          <Button title="Stop Monitoring" />
        </TouchableOpacity>
      </View>
    );
  }
}

LinksScreen.navigationOptions = {
  header: null,
};
