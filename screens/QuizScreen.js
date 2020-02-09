import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
      show2: false,
      show3: false,
      show4: false,
      tiredScore: 0,
      quizFeedback: 'None. Quiz was not taken successfully.',
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
      this.setState({ show2: true });
    } else if (this.state.show2 == true) {
      this.setState({ show2: false });
      this.setState({ show3: true });
    } else if (this.state.show3 == true) {
      this.setState({ show3: false });
      this.setState({ show4: true });
    }
  };

  setQuizFeedback(tiredScore) {
    if (tiredScore <= 2) {
      this.setState({
        quizFeedback:
          'Your results do not indicate that you are too tired to drive. However, use your best judgement and do not drive if you feel too tired.',
      });
    } else if (tiredScore <= 4) {
      this.setState({
        quizFeedback:
          'You seem moderately tired. You should take a break before getting back on the road.',
      });
    } else {
      this.setState({
        quizFeedback:
          'You are exhausted. It is too dangerous for you to drive. What would you like to do instead?\n\n1. Call a buddy\n2. Call the police\n3. Sleep in your car...?',
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.show ? (
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.buttonsContainer}>
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

              <TouchableOpacity
                onPress={() => {
                  this.ShowHideComponent();
                }}
              >
                <Button title={quizData.quiz.quiz1.question1.options.option1} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.ShowHideComponent(),
                    this.setState({ tiredScore: this.state.tiredScore + 1 });
                }}
              >
                <Button title={quizData.quiz.quiz1.question1.options.option2} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.ShowHideComponent(),
                    this.setState({ tiredScore: this.state.tiredScore + 2 });
                }}
              >
                <Button title={quizData.quiz.quiz1.question1.options.option3} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.ShowHideComponent(),
                    this.setState({ tiredScore: this.state.tiredScore + 4 });
                }}
              >
                <Button title={quizData.quiz.quiz1.question1.options.option4} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : null}

        <View style={styles.getStartedContainer}>
          {this.state.show2 ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.ShowHideComponent();
                }}
              >
                <Button title="Swipe up (correct)" />
              </TouchableOpacity>

              <View style={styles.circleContainer}></View>

              <TouchableOpacity
                onPress={() => {
                  this.ShowHideComponent(),
                    this.setState({ tiredScore: this.state.tiredScore + 1 });
                }}
              >
                <Button title="Swipe down" />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <View style={styles.getStartedContainer}>
          {this.state.show3 ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.ShowHideComponent(),
                    this.setState({ tiredScore: this.state.tiredScore + 1 }),
                    this.setQuizFeedback(this.state.tiredScore);
                }}
              >
                <Button title="Swipe up" />
              </TouchableOpacity>

              <View style={styles.quizTextContainer}>
                <Text style={styles.quizText}>3</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.ShowHideComponent(),
                    this.setQuizFeedback(this.state.tiredScore);
                }}
              >
                <Button title="Swipe down (correct)" />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <View style={styles.getStartedContainer}>
          {this.state.show4 ? (
            <View>
              <Text style={styles.quizResultsText}>
                Your score: {this.state.tiredScore}
              </Text>

              <Text style={styles.quizResultsText}>
                {this.state.quizFeedback}
              </Text>
            </View>
          ) : null}
        </View>
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
    marginTop: 50,
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
    color: 'rgba(0,0,0, 0.87)',
    lineHeight: 24,
    textAlign: 'center',
  },
  clockText: {
    fontSize: 60,
  },
  quizText: {
    fontSize: 96,
    marginTop: 70,
  },
  quizResultsText: {
    fontSize: 24,
    marginTop: 110,
  },
  circleContainer: {
    backgroundColor: '#00FF55',
    borderRadius: 150,
    width: 300,
    height: 300,
    marginTop: 50,
  },
  quizTextContainer: {
    backgroundColor: '#FFF',
    borderRadius: 150,
    width: 300,
    height: 300,
    marginTop: 50,
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
});
