import React from 'react';
import{
  Navigator
} from 'react-native';

import  signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import topics from './components/topics';
import chooseName from './components/auth/chooseName';
import topicDetail from './components/topic-detail';
import forgotPassword from './components/auth/forgot-password';


const routes = {
  signIn,
  signUp,
  chooseName,
  forgotPassword,
  topics,
  topicDetail
}

module.exports = React.createClass({
  render(){
    return (
      <Navigator
        initialRoute = {{name: 'signIn'}}
        renderScene = {this.renderScene}
      />
    )
  },
  renderScene(route,navigator){
    let Component = routes[route.name];

    let {displayName,title,author,row_uid}=route;

  return (
    <Component
    navigator={navigator}
    displayName={route.displayName}
    title={route.title}
    author={route.author}
    row_uid={route.row_uid}
    />
    )
  }
})
