import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../components/Button';

export default class ArrivedScreen extends React.Component {
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
        message: 'I arrived at my destination successfully.',
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
        message: 'I arrived at my destination successfully.',
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
        message: 'I arrived at my destination successfully.',
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
            <Text style={styles.randomText}>Hurray!</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.randomText}>
              Send a text to let your buddy know you arrived safely!
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.handleSendSMS.bind(this)}>
              <Button title="Send Text Now" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

ArrivedScreen.navigationOptions = {
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
  buttonContainer: {
    alignItems: 'center',
  },
});
