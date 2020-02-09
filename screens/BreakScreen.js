import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

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
              borderColor: '#1CC625',
            }}
            digitTxtStyle={{ color: '#1CC625' }}
            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
            separatorStyle={{ color: '#1CC625' }}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ m: null, s: null }}
            showSeparator
          />

          <View style={styles.textContainer}>
            <Text style={styles.exercisesText}>Be sure to stretch!</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.smallerText}>Stretch Out Your Legs</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.smallerText}>Relieve Lower Back Tension</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.smallerText}>Relax Your Neck and Eyes</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.smallerText}>
              Stretch Your Arms and Shoulders
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
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  exercisesText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 40,
  },
  smallerText: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 40,
  },
});
