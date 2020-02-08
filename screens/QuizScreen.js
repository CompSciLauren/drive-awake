import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import { Button } from '../components/Button';

export default class QuizScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.breakText}>Text</Text>

            <View
              style={[styles.codeHighlightContainer, styles.quizScreenFilename]}
            >
              <MonoText style={styles.clockText}>Text</MonoText>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigate('Settings')}>
            <Button title="HELP" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Settings')}>
            <Button title="Arrived" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Settings')}>
            <Button title="Take Quiz" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

QuizScreen.navigationOptions = {
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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  quizScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  breakText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  clockText: {
    fontSize: 60,
  },
});
