import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';
export default class HomeScreen extends Component {
  handleTurnDeviceOn = async () => {
    fetch('http://13.58.89.149:8000/endpoint/api/onoff/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        turnOnConnection: true,
      }),
    });
  };

  handleTurnDeviceOff = async () => {
    fetch('http://13.58.89.149:8000/endpoint/api/onoff/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        turnOnConnection: false,
      }),
    });
  };

  render() {
    return (
      <View style={{ paddingTop: 50, paddingLeft: 50 }}>
        <Text> Some other text </Text>
        <Text> Some other text </Text>

        <TouchableOpacity onPress={this.handleTurnDeviceOn.bind(this)}>
          <Text style={{ paddingTop: 50, paddingLeft: 50, color: '#FF0000' }}>
            {' '}
            Click me to turn the device on{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleTurnDeviceOff.bind(this)}>
          <Text style={{ paddingTop: 50, paddingLeft: 50, color: '#FF0000' }}>
            {' '}
            Click me to turn the device off{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// import * as WebBrowser from 'expo-web-browser';
// import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// import { MonoText } from '../components/StyledText';
// import { Button } from '../components/Button';

// export default class HomeScreen extends React.Component {
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <ScrollView
//           style={styles.container}
//           contentContainerStyle={styles.contentContainer}
//         >
//           <View style={styles.welcomeContainer}>
//             <Image
//               source={
//                 __DEV__
//                   ? require('../assets/images/robot-dev.png')
//                   : require('../assets/images/robot-prod.png')
//               }
//               style={styles.welcomeImage}
//             />
//           </View>

//           <View style={styles.getStartedContainer}>
//             <Text style={styles.breakText}>Time until required break:</Text>

//             <View
//               style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
//             >
//               <MonoText style={styles.clockText}>4:20</MonoText>
//             </View>
//           </View>

//           <TouchableOpacity onPress={() => navigate('Settings')}>
//             <Button title="HELP" />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => navigate('Settings')}>
//             <Button title="Arrived" />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => navigate('Quiz')}>
//             <Button title="Take Quiz" />
//           </TouchableOpacity>

//           <Text style={styles.weatherText}>
//             The weather is (good/bad). Road conditions (should be normal / may
//             be bad).
//           </Text>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// HomeScreen.navigationOptions = {
//   header: null,
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   breakText: {
//     fontSize: 24,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   clockText: {
//     fontSize: 60,
//   },
//   weatherText: {
//     marginTop: 40,
//     fontSize: 24,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//     marginHorizontal: 20,
//   },
// });
