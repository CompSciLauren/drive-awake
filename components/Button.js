import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function Button(props) {
  const { title } = props;
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonButton} activeOpacity={0.5}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 100,
  },
  buttonButton: {
    width: 154,
    height: 72,
    backgroundColor: '#930101',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
  },
});
