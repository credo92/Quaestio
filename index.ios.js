import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Main from './src/main';

export default class TopicWizard extends Component {
  render() {
    return (
      <Main />
    );
  }
}



AppRegistry.registerComponent('TopicWizard', () => TopicWizard);
