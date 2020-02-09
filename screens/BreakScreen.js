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
    const stretchArray = [
      'stretch_1.PNG',
      'stretch_2.PNG',
      'stretch_3.PNG',
      'stretch_5.PNG',
      'stretch_6.PNG',
      'stretch_7.PNG',
      'stretch_9.PNG',
      'stretch_10.PNG',
      'stretch_11.PNG',
      'stretch_12.PNG',
      'stretch_13.PNG',
      'stretch_14.PNG',
    ];
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
            onFinish={() => navigate('Quiz')}
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
            <Text style={styles.biggerText2}>
              Take this opportunity to stretch!
            </Text>
          </View>

          <View>
            <Image
              source={require('../assets/images/' +
                stretchArray[Math.floor(Math.random() * stretchArray.length)])}
              style={styles.imageSize}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.biggerText}>Did you know?</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.smallerText}>
              {funFactsList[Math.floor(Math.random() * funFactsList.length)]}
            </Text>
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
    color: 'rgba(0,0,0, 0.87)',
    lineHeight: 24,
    textAlign: 'center',
  },
  biggerText: {
    fontSize: 24,
    color: 'rgba(0,0,0, 0.87)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 50,
  },
  biggerText2: {
    fontSize: 24,
    color: 'rgba(0,0,0, 0.87)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  smallerText: {
    fontSize: 18,
    color: 'rgba(0,0,0, 0.87)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 15,
  },
  imageSize: {
    width: 'auto',
    height: 160,
  },
});
