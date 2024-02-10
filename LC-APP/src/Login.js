import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, View, StatusBar} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
   
export default function Login ({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPressHandler = () => {
    navigation.navigate("Register");
  }
  const onClick=()=>{
    navigation.navigate('Home');
   }

    return (   
      <SafeAreaView style={styles.container}>
        <View style={styles.section__1}>
        <Text style={styles.header}>Learn Coding</Text>
        
        <View style={styles.appIcon}>
        <FontAwesome name="code" size={150} color="#FFF"  />
        </View>
        <Text style ={styles. signin}> Sign in</Text>
        <TextInput style={styles.input} placeholder="Enter Email" placeholderTextColor={'#FFA07A'}  onChangeText={(email) => setEmail(email)}></TextInput>
        <TextInput style={styles.input} placeholder="Enter Password" placeholderTextColor={'#FFA07A'} onChangeText={(password) => setPassword(password)} ></TextInput>
        
        <TouchableOpacity style={styles.button_1} onPress={onClick} >
          <Text style={styles.login} >LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button_2}  onPress={onPressHandler}>
          <Text style={styles.signup}>SIGN UP</Text>
        </TouchableOpacity>
        
        </View>  
        </SafeAreaView>
      );
  }
      
  const styles = StyleSheet.create({
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
      color:'#fff'

    },
    appIcon:{
      justifyContent:'center',
      alignItems:'center',
      marginTop: 20
    },
    signin:{
      fontSize: 30,
      color:'#fff',
      fontWeight:'bold',
      marginTop:'5%'
    },
    input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      alignContent:'center',
      color:'white',
      borderColor:'white',
      marginTop:'5%'
      
    },
    button_1:{
      backgroundColor:'#5BA4FC',
      width: '70%',
      height: '7%',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      borderRadius:50,
      marginTop:'7%',
    },
    button_2:{
      backgroundColor:'#5897EE',
      width: '70%',
      height: '7%',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      borderRadius:50,
      marginTop:'5%'
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
   
  });




