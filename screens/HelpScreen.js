import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../components/Button';

export default class HelpScreen extends React.Component {
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

          <TouchableOpacity onPress={() => alert('Location sent! No, really!')}>
            <Button title="Send My Location Now" />
          </TouchableOpacity>
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
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
