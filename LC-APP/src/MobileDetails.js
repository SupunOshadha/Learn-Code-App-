import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar, Linking} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

const NavigatToHome = props =>{
 props.navigation.navigate("Home");
}
const NavigatToLogin = props =>{
  props.navigation.navigate("Login");
}

const MobileDetails = props => { 
  return (
    
    <SafeAreaView style={styles_2.container}>
      <ScrollView>
      
      <View style={styles_2.home}>
      <Ionicons style={styles_2.nav} name="ios-home" size={34} color="blue"  onPress={() =>  NavigatToHome(props)} />
      <MaterialIcons style={styles_2.nav} name="logout" size={34} color="black"  onPress={() =>  NavigatToLogin(props)} title={"logout"}/>
      </View>

      <View style={styles_2.topicbody}>
        <Text style={styles_2.topic}>Mobile Application Development</Text>
      </View>
      
      <TouchableOpacity style={styles_2.contentBody1} onPress = {() => {Linking.openURL("https://www.youtube.com/watch?v=fis26HvvDII")}}>   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>Java</Text> 
          <Image style={styles_2.img1} source = {require("../assets/images/java.png")}/> 
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress = {() => {Linking.openURL("https://www.youtube.com/watch?v=C2DBDZKkLss")}}>     
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>Kotlin</Text>
          <Image style={styles_2.img2} source = {require("../assets/images/kotlin.png")}/>    
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress = {() => {Linking.openURL("https://www.youtube.com/watch?v=ANdSdIlgsEw&t=10189s")}}>   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>React Native</Text>
          <Image style={styles_2.img} source = {require("../assets/images/rn.png")}/>    
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress = {() => {Linking.openURL("https://www.youtube.com/watch?v=KCgYDCKqato")}}>   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>Swift</Text>
          <Image style={styles_2.img3} source = {require("../assets/images/swift.png")}/>    
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

  txtBody: { 
    top: "10%",
    left: "10%",
  },
  img: {
    padding: 10,
    width: 300,
    height: 170,
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
  img2: {
    padding: 10,
    width: 250,
    height: 50,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  img3: {
    padding: 10,
    width: 150,
    height: 150,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    left: 10,
    margin: 8,   
  },

});

export default MobileDetails;