import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button } from '../components/Button';

const quizData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option1',
        options: {
          option1: 'Not Tired At All',
          option2: 'A Bit Tired',
          option3: 'Very Tired',
          option4: 'Exhausted',
        },
        question: 'How tired are you right now?',
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
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.show ? (
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.getStartedContainer}>
              <Text style={styles.breakText}>
                {quizData.quiz.quiz1.question1.question}
              </Text>

              <View
                style={[
                  styles.codeHighlightContainer,
                  styles.quizScreenFilename,
                ]}
              ></View>
            </View>

            <TouchableOpacity onPress={this.ShowHideComponent}>
              <Button title={quizData.quiz.quiz1.question1.options.option1} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Settings')}>
              <Button title={quizData.quiz.quiz1.question1.options.option2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Settings')}>
              <Button title={quizData.quiz.quiz1.question1.options.option3} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Settings')}>
              <Button title={quizData.quiz.quiz1.question1.options.option4} />
            </TouchableOpacity>

            <View style={styles.getStartedContainer}>
              <View style={styles.circleContainer}></View>
            </View>
          </ScrollView>
        ) : null}
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
  circleContainer: {
    backgroundColor: '#00FF55',
    borderRadius: 150,
    width: 300,
    height: 300,
  },
});
