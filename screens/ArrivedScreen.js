import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class ArrivedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.randomText}>Text</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.randomText}>Another line of text</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.randomText}>Even more text</Text>
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
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
