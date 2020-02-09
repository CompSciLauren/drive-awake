import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../components/Button';

export default class ArrivedScreen extends React.Component {
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

          <TouchableOpacity onPress={() => alert('Text sent! No, really!')}>
            <Button title="Send Text Now" />
          </TouchableOpacity>
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
});
