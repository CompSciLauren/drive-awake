import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../components/Button';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

export default class HelpScreen extends React.Component {
  handleSendSMS = async () => {
    fetch('http://13.58.89.149:8000/contacts/api/sms/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver: '+18167729435',
        sender: '+15307224633',
        message:
          'I am in need of assistance in this location: 1450 Jayhawk Blvd, Lawrence, KS 66045',
      }),
    });
    fetch('http://13.58.89.149:8000/contacts/api/sms/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver: '+18165502253',
        sender: '+15307224633',
        message:
          'I am in need of assistance in this location: 1450 Jayhawk Blvd, Lawrence, KS 66045',
      }),
    });
    fetch('http://13.58.89.149:8000/contacts/api/sms/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver: '+19137558051',
        sender: '+15307224633',
        message:
          'I am in need of assistance in this location: 1450 Jayhawk Blvd, Lawrence, KS 66045',
      }),
    });
  };

  handleSendCall = async () => {
    fetch('http://13.58.89.149:8000/contacts/api/call/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver: '+18167729435',
        sender: '+15307224633',
        message:
          'I am in need of assistance in this location: 1450 Jayhawk Blvd, Lawrence, KS 66045',
      }),
    });
    fetch('http://13.58.89.149:8000/contacts/api/call/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver: '+19134855706',
        sender: '+15307224633',
        message:
          'I am in need of assistance in this location: 1450 Jayhawk Blvd, Lawrence, KS 66045',
      }),
    });
    fetch('http://13.58.89.149:8000/contacts/api/call/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver: '+19137558051',
        sender: '+15307224633',
        message:
          'I am in need of assistance in this location: 1450 Jayhawk Blvd, Lawrence, KS 66045',
      }),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.randomText}>
              Press the button to send your location to your buddy and let them
              know you need their help.
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={this.handleSendSMS.bind(this)}>
              <Button title="Send My Location (SMS)" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleSendCall.bind(this)}>
              <Button title="Send My Location (Call)" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

HelpScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 12,
  },
  randomText: {
    fontSize: 24,
    color: 'rgba(0,0,0, 0.87)',
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    textAlign: 'center',
  },
});
