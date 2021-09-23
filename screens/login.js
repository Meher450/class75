import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import * as firebase from 'firebase';

export default class loginScreen extends React.Component{
  constructor(){
    super()
    this.state={
      EmailId:'',
      Password:''
    }
  }

  login=async(email,password)=>{
    if(email && password){
      try{
        const response=await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){
          this.props.navigation.navigate('TransactionScreen');
        }
      }
      catch(error){
        switch(error.code){
          case 'auth/user-not-found':
          alert("User doesnot exist");
          break
          case 'auth/invalid-email':
          alert('incorrect email or password')
          break
        }
      }
    }
    else {
      alert("Enter Email and Password");
    }
  }
  render(){
    return(
      <KeyboardAvoidingView style={{
        alignItems:'center', marginTop:20
      }}>

      <View>
      <Image
        source={require('../assets/booklogo.jpg')}
        style={{ width: 200, height: 200 }}
            />
      
      <Text style={{ textAlign: 'center', fontSize: 30 }}>Wily</Text>
      </View>
          <View>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              keyboardType='Email-Address'
              onChangeText={(text) => {this.setState({ EmailId: text })}}
            />

            <TextInput
              style={styles.loginBox}
              placeholder="Enter Passward"
              secureTextEntry={true}
              onChangeText={(text) => {this.setState({ Password: text })}}
            />

      </View>
      <View>
      <TouchableOpacity style={{
        height:30, width: 90, borderWidth:2, marginTop:20, paddingTop:5, borderRadius:7
      }} onPress={()=>{
        this.login(this.state.EmailId,this.state.Password)
      }}>
      <Text style={{textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles=StyleSheet.create({
  loginBox:{
    width:300, 
    height:40,
    borderWidth:1.5,
    fontSize:20,
    margin:20,
    paddingLeft:10
  }

})