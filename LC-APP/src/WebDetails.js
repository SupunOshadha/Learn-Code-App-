import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar, Linking} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


export default function WebDetails({navigation}){ 
  const NavigatToHome = () =>{
  navigation.navigate("Home");
  }
  const NavigatToLogin = () =>{
    navigation.navigate("Login");
  }
  return (
    
    <SafeAreaView style={styles_2.container}>
      <ScrollView>
      
      <View style={styles_2.home}>
      <Ionicons style={styles_2.nav} name="ios-home" size={34} color="blue"  onPress={() =>  NavigatToHome()} />
      <MaterialIcons style={styles_2.nav} name="logout" size={34} color="black"  onPress={() =>  NavigatToLogin()} title={"logout"}/>
      </View>

      <View style={styles_2.topicbody}>
        <Text style={styles_2.topic}>Web Application Development</Text>
      </View>
      
      <TouchableOpacity style={styles_2.contentBody1} onPress = {() => {Linking.openURL("https://youtu.be/qz0aGYrrlhU")}}>   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>HTML</Text>  
          <Image style={styles_2.img} source = {require("../assets/images/html.png")}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress = {() => {Linking.openURL("https://www.youtube.com/watch?v=1Rs2ND1ryYc")}}>     
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>CSS</Text> 
          <Image style={styles_2.img} source = {require("../assets/images/css.png")}/>  
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress = {() => {Linking.openURL("https://www.youtube.com/watch?v=W6NZfCO5SIk")}}>   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>Javascript</Text>
          <Image style={styles_2.img} source = {require("../assets/images/js.png")}/>     
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress = {() => {Linking.openURL("https://www.youtube.com/watch?v=hBh_CC5y8-s")}}>   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>Java</Text> 
          <Image style={styles_2.img1} source = {require("../assets/images/java.png")}/>    
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress = {() => {Linking.openURL("https://www.youtube.com/watch?v=OK_JCtrrv-c")}}>   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>php</Text>  
          <Image style={styles_2.img1} source = {require("../assets/images/php.png")}/>   
        </View>
      </TouchableOpacity>
      
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles_2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight
  },
  home:{
    alignSelf:"flex-end",
    paddingRight:"4%",
    flexDirection:"row"
  },
  nav:{
   margin:"2%"
  },
  topicbody: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7%",
    flexDirection:'row',
    alignSelf:"center"
  },
 
  topic: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "orange",
    padding: 14,
    borderRadius: 12,
  },

  contentBody: {
    backgroundColor: "#00acee",
    margin: "5%",
    borderRadius: 30,
    marginTop:"10%"
  },
  contentBody1: {
    backgroundColor: "#00acee",
    margin: "5%",
    borderRadius: 30,
    marginTop:"10%"
  },
  img: {
    padding: 10,
    width: 170,
    height: 200,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  img1: {
    padding: 10,
    width: 200,
    height: 100,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  txtBody: { 
    top: "10%",
    left: "10%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    left: 10,
    margin: 8,   
  },

});











