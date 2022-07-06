import * as React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import TextAnimator from './File/special'

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <TextAnimator 
          content="thanks for all  the time we spend , hoe got an a+  , " 
          textStyle={styles.textStyle}
          style={styles.containerStyle}
          timing={500}
          onFinish={ this._onFinish }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerStyle: {},
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Menlo',
    marginBottom: 14
  },
});
