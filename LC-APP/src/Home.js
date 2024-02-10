import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';  
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({navigation}){  
  const NavigatToLogin = () =>{
    navigation.navigate("Login");
  }
  const NavigatTodisplay = props =>{
    navigation.navigate("display");
  }
  return (
    
    <SafeAreaView style={styles_2.container}>
      <ScrollView>
     
      <View style>
      <MaterialIcons style={styles_2.logout} name="logout" size={24} color="black"  onPress={() =>  NavigatToLogin()} title={"logout"}/>
      </View>
      
      <View style={styles_2.topicbody}>
        <Text style={styles_2.topic}>Categories</Text>
      </View>
  
      <TouchableOpacity style={styles_2.contentBody}  onPress={() =>  NavigatTodisplay()} >   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>Web Application Development</Text>
          <Image style={styles_2.img} source = {require("../assets/images/web.png")} />  
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress={() =>  NavigatTodisplay()}>     
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>Mobile Application Development</Text>
          <Image style={styles_2.img} source = {require("../assets/images/mobile.png")}/>      
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles_2.contentBody} onPress={() =>  NavigatTodisplay()}>   
        <View style={styles_2.txtBody}>
          <Text style={styles_2.title}>Standalone Application Development</Text>
          <Image style={styles_2.img} source = {require("../assets/images/sa.png")}/>
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
  topicbody: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    flexDirection:'row'
  },
  logout:{
    alignSelf:"flex-end",
    paddingRight:"10%"
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
  },

  img: {
    padding: 10,
    width: 150,
    height: 200,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  
  txtBody: {
    top: "10%",
    left: "10%",
  },
  
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff", 
    left: 10,
    margin: 8,     
  },
});

