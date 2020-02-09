import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

import { MonoText } from '../components/StyledText';
import { Button } from '../components/Button';

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.breakText}>Time until required break:</Text>

            <CountDown
              size={30}
              until={1000}
              onFinish={() => alert('Finished')}
              digitStyle={{
                backgroundColor: '#FFF',
                borderWidth: 2,
                borderColor: '#1CC625',
              }}
              digitTxtStyle={{ color: '#1CC625' }}
              timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
              separatorStyle={{ color: '#1CC625' }}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{ m: null, s: null }}
              showSeparator
            />
          </View>

          <TouchableOpacity onPress={() => navigate('Settings')}>
            <Button title="HELP" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Settings')}>
            <Button title="Arrived" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Quiz')}>
            <Button title="Take Quiz" />
          </TouchableOpacity>

          <Text style={styles.weatherText}>
            The weather is (good/bad). Road conditions (should be normal / may
            be bad).
          </Text>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
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
  weatherText: {
    marginTop: 40,
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
