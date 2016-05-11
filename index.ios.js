'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class mindfulnessapp extends Component {
  buttonStyling(btn) {
    var styling = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn === 0) {
      styling.backgroundColor = '#2cbfc9';
    } else if (btn === 1) {
      styling.backgroundColor = '#fbe457';
    } else if (btn === 2) {
      styling.backgroundColor = '#dc6969';
    } else if (btn === 3) {
      styling.backgroundColor = '#57d86a';
    } else if (btn === 4) {
      styling.backgroundColor = '#e8731b';
    } else {
      styling.backgroundColor = '#ac5ee6';
    }

    return styling;
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>10 Minute Mindfulness</Text>
          <Text style={styles.headerSubTitle}> 
            Take one exercise for 10 minutes to improve your mental and physical wellbeing
          </Text>
        </View>

        <View style={styles.content}>

    {/* TODO: put values into array and use map function */}      
          <TouchableHighlight
            style={this.buttonStyling(0)}
            underlayColor='#FFFFFF'>
              <Text style={styles.buttonText}> Mindful Meditation </Text>
            </TouchableHighlight>

          <TouchableHighlight
            style={this.buttonStyling(1)}
            underlayColor='#FFFFFF'>
              <Text style={styles.buttonText}> Mindful Meditation </Text>
            </TouchableHighlight>

          <TouchableHighlight
            style={this.buttonStyling(2)}
            underlayColor='#FFFFFF'
            underlayColor='#FFFFFF'>
              <Text style={styles.buttonText}> Mindful Yoga </Text>
            </TouchableHighlight>

          <TouchableHighlight
            style={this.buttonStyling(3)}
            underlayColor='#FFFFFF'>
              <Text style={styles.buttonText}> Mindful Test text </Text>
            </TouchableHighlight> 

          <TouchableHighlight
            style={this.buttonStyling(4)}
            underlayColor='#FFFFFF'>
              <Text style={styles.buttonText}> Mindful other text </Text>
            </TouchableHighlight> 

          <TouchableHighlight
            style={this.buttonStyling(5)}
            underlayColor='#FFFFFF'>
              <Text style={styles.buttonText}> Mindful mindfulness </Text>
            </TouchableHighlight> 

        </View>

      </View>
    );
  }
}

{/* styles */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  header: {
    flex: 2,
    justifyContent: 'center'
  },
  content: {
    flex: 6
  },
  headerTitle: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'dimgray',
    fontFamily: 'Avenir-Black'
  },
  headerSubTitle: {
    fontSize: 15,
    marginLeft: 25,
    marginRight: 25,
    alignItems: 'center',
    textAlign:'center',
    color: 'dimgray',
    fontFamily: 'Avenir'
  },  
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Avenir-Black',
    textShadowColor: 'dimgray',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1
  }
});

AppRegistry.registerComponent('mindfulnessapp', () => mindfulnessapp);
