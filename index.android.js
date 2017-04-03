/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export default class WebviewSuggestBugSample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  _renderLoadingIndicator = () => {
    if (this.state.loading) {
      return (
        <Text style={styles.loadingOverlay}>
          LOADING...
        </Text>
      );
    } else {
      return null;
    }
  }

  _onNavigationStateChange = (navState) => {
    this.setState({ loading: navState.loading });
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: "https://angular-ui.github.io/ui-router/sample" }}
          onNavigationStateChange={this._onNavigationStateChange}
        />
        {this._renderLoadingIndicator()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingOverlay: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255,0.7)',
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0
  }
});

AppRegistry.registerComponent('WebviewSuggestBugSample', () => WebviewSuggestBugSample);
