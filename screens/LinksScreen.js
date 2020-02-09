import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
export default class LinksScreen extends Component {
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

  handleGetRequest = async () => {
    fetch('http://13.58.89.149:8000/endpoint/api/status/', {
      method: 'GET',
      //Request Type
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        alert('is drowsy: ' + responseJson[responseJson.length - 1].isDrowsy);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        console.error(error);
      });
  };

  render() {
    return (
      <View style={{ paddingTop: 50, paddingLeft: 50 }}>
        <TouchableOpacity onPress={this.handleTurnDeviceOn.bind(this)}>
          <Text style={{ paddingTop: 50, paddingLeft: 50, color: '#FF0000' }}>
            {' '}
            Click me to turn the device on{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleTurnDeviceOff.bind(this)}>
          <Text style={{ paddingTop: 50, paddingLeft: 50, color: '#FF0000' }}>
            {' '}
            Click me to turn the device off{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleGetRequest.bind(this)}>
          <Text style={{ paddingTop: 50, paddingLeft: 50, color: '#FF0000' }}>
            {' '}
            Click me to make GET request{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
