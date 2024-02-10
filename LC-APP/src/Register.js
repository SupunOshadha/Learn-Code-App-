import React, { useState } from "react";
import {  StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, StatusBar, Alert} from 'react-native';

export default function Register ({navigation}){
  const [name, setName] = useState("");
  const [passowrd, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [submitted, setSubmitted] = useState(!true);

  const NavigatToLogin =() =>{
  navigation.navigate("Login");
}

  const onPressHandler = ()=> {
  navigation.navigate("Login")
  if (name) {
    setSubmitted(!submitted);
  } else {
    setSubmitted(!submitted);
    Alert.alert(
      "Warning",
      "Please enter your name",
      [{ text: "OK" }],
      { cancelable: true }
    );
  }

  if (passowrd) {
    setSubmitted(!submitted);
  } else {
    setSubmitted(!submitted);
    Alert.alert(
      "Warning",
      "Please enter your password",
      [{ text: "OK" }],
      { cancelable: true }
    );
  }

  if (email) {
    setSubmitted(!submitted);
  } else {
    setSubmitted(!submitted);
    Alert.alert(
      "Warning",
      "Please enter your valid email",
      [{ text: "OK" }],
      { cancelable: true }
    );
  }

  if (number) {
    setSubmitted(!submitted);
  } else {
    setSubmitted(!submitted);
    Alert.alert(
      "Warning",
      "Please enter your phone number",
      [{ text: "OK" }],
      { cancelable: true }
    );
  }
};

  return (   
    <SafeAreaView style={styles_1.container}>
      <View style={styles_1.section__1}>
      <Text style={styles_1.header}>Registration</Text>
      <TextInput style={styles_1.input_o} placeholder="Enter Name" placeholderTextColor={'#FFA07A'} onChangeText={(value) => setName(value)}></TextInput>
      <TextInput style={styles_1.input} placeholder="Enter Password" placeholderTextColor={'#FFA07A'} onChangeText={(value) => setPassword(value)}></TextInput>
      <TextInput style={styles_1.input} placeholder="Enter Email" placeholderTextColor={'#FFA07A'}  onChangeText={(value) => setEmail(value)}></TextInput>
      <TextInput style={styles_1.input} placeholder="Enter Phone number" placeholderTextColor={'#FFA07A'} onChangeText={(value) => setNumber(value)}></TextInput>
      
      <TouchableOpacity style={styles_1.button_1} onPress={onPressHandler}>
        <Text style={styles_1.login} >REGISTER</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles_1.button_2} onPress={() => NavigatToLogin()}>
        <Text style={styles_1.signup}>BACK</Text>
      </TouchableOpacity>
      
      </View>  
      </SafeAreaView>
    );
}
const styles_1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#5BA4FC',
    justifyContent:'center',
    alignItems: 'center',
    width:'100%',
    paddingLeft:5,
    paddingRight:5,
    paddingTop: StatusBar.currentHeight
    
  },
  section__1: {
    paddingLeft: 10,
    paddingRight:10,
    width: '100%',
    backgroundColor:'#720D5D',
    flex:1,
    marginTop: 1
  },
  header:{
    fontSize:40,
    fontWeight:'bold',
    alignSelf:'center',
    color:'#fff',

  },
  signin:{
    fontSize: 30,
    color:'#fff',
    fontWeight:'bold'
  },
  input_o: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      alignContent:'center',
      color:'white',
      borderColor:'white',
      marginTop:'20%'
      
    },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    alignContent:'center',
    color:'white',
    borderColor:'white'
    
  },
  button_1:{
    backgroundColor:'#5BA4FC',
    width: '70%',
    height: '7%',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:50,
    marginTop:'8%',
  },
  button_2:{
    backgroundColor:'#5897EE',
    width: '70%',
    height: '7%',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:50,
    marginTop:'5%',
  },
  login:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18
  },
  signup:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18
  }, 
})

