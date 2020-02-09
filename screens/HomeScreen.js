import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
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
          <View style={styles.getStartedContainer}>
            <Text style={styles.breakText}>Time until required break:</Text>

            <CountDown
              size={30}
              until={2400}
              onFinish={() => navigate('Break')}
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
          </View>

          <View style={styles.buttonsAndWeatherContainer}>
            <TouchableOpacity onPress={() => navigate('Help')}>
              <Button title="HELP" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Arrived')}>
              <Button title="Arrived" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Quiz')}>
              <Button title="Take Quiz" />
            </TouchableOpacity>

            {/* <Text style={styles.weatherText}>
              The weather is (good/bad). Road conditions (should be normal / may
              be bad).
            </Text> */}

            <TouchableOpacity onPress={() => navigate('Break')}>
              <Button title="Break Screen (debugging)" />
            </TouchableOpacity>
          </View>
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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  buttonsAndWeatherContainer: {
    marginTop: 72,
    alignItems: 'center',
  },
  breakText: {
    fontSize: 24,
    color: 'rgba(0,0,0, 0.87)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  // weatherText: {
  //   marginTop: 40,
  //   fontSize: 24,
  //   color: 'rgba(0,0,0, 0.87)',
  //   lineHeight: 24,
  //   textAlign: 'center',
  //   marginHorizontal: 20,
  // },
});
