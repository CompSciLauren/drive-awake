import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

const funFactsList = [
  'The Sleep Foundation recommends that you take a break every 2 hours or every 100 miles to do something stimulating.',
  'Caffeine does not increase your reaction time on the road.',
  'Certain music can help to increase your awakeness, so pump it up!',
];

export default class BreakScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.randomText}>
              Time to pull over and take a short break!
            </Text>
          </View>

          <CountDown
            size={30}
            until={180}
            onFinish={() => navigate('Home')}
            digitStyle={{
              backgroundColor: '#FFF',
              borderWidth: 2,
              borderColor: '#930101',
            }}
            digitTxtStyle={{ color: '#930101' }}
            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
            separatorStyle={{ color: '#930101' }}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ m: null, s: null }}
            showSeparator
          />

          <View style={styles.textContainer}>
            <Text style={styles.biggerText}>Everybody do the stretch!</Text>
          </View>

          {/* <View>
            <Image
              source={require('../assets/images/stretch_1.PNG')}
              style={styles.imageSize}
            />
          </View> */}

          <View style={styles.textContainer}>
            <Text style={styles.biggerText}>Did you know?</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.smallerText}>{funFactsList[0]}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

BreakScreen.navigationOptions = {
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
  biggerText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 50,
  },
  smallerText: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 15,
  },
  imageSize: {
    width: 'auto',
    height: 160,
  },
});
