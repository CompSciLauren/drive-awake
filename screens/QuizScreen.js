import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button } from '../components/Button';

const quizData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option3',
        options: {
          option1: 'Java',
          option2: 'PHP',
          option3: 'Javascript',
          option4: 'IOS',
        },
        question: 'React is a ____ library',
      },
      question2: {
        correctoption: 'option4',
        options: {
          option1: 'XML',
          option2: 'YML',
          option3: 'HTML',
          option4: 'JSX',
        },
        question: '____ tag syntax is used in React',
      },
      question3: {
        correctoption: 'option1',
        options: {
          option1: 'Single root DOM node',
          option2: 'Double root DOM node',
          option3: 'Multiple root DOM node',
          option4: 'None of the above',
        },
        question: 'Application built with just React usually have ____',
      },
      question4: {
        correctoption: 'option2',
        options: {
          option1: 'mutable',
          option2: 'immutable',
          option3: 'variable',
          option4: 'none of the above',
        },
        question: 'React elements are ____',
      },
      question5: {
        correctoption: 'option3',
        options: {
          option1: 'functions',
          option2: 'array',
          option3: 'components',
          option4: 'json data',
        },
        question:
          'React allows to split UI into independent and reusable pieses of ____',
      },
    },
  },
};

export default class QuizScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const qdata = quizData.quiz.quiz1;
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
            ></View>
          </View>

          <TouchableOpacity onPress={() => navigate('Settings')}>
            <Button title="HELP" />
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
