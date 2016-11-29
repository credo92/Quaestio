import React, {Component} from 'react';
import{
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import styles from '../../styles';
import {firebaseApp} from './authentication';

module.exports = React.createClass({

getInitialState(){
  return({
  email: '',
  password:'',
  confirmPassword:'',
  result:''
  })
},
signUp(){
  if(this.state.password === this.state.confirmPassword){
    //create user
    let {email,password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email,password)
     .catch(error => this.setState({result: error.message}));

  } else{
    // password dont' match
    this.setState({result:'Passwords must match'})
  }
},
  render(){
    return(
      <View style = {styles.container}>
         <Text style={styles.feedback}>{this.state.result}</Text>
         <TextInput
         placeholder = 'Email'
         style={styles.input}
         onChangeText = {(text)=> this.setState({email : text})}
          />
          <TextInput
          placeholder = 'Password'
          style={styles.input}
          onChangeText = {(text)=> this.setState({password : text})}
          secureTextEntry={true}
           />
           <TextInput
           placeholder = 'Confirm Password'
           style={styles.input}
           onChangeText = {(text)=> this.setState({confirmPassword : text})}
           secureTextEntry={true}
            />
           <TouchableOpacity
           style ={styles.buttonContainer}
           onPress={()=> this.signUp()}>
              <Text style={styles.button}> Sign Up</Text>
           </TouchableOpacity>
           <View style = {styles.links}>

             <TouchableOpacity onPress={()=> this.props.navigator.pop()}>
                <Text style={styles.link}>Already a member ? Sign In</Text>
             </TouchableOpacity>
           </View>

      </View>
    )
  }
})
