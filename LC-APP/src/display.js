import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WebDetails from "./WebDetails";
import MobileDetails from './MobileDetails';
import SaDetails from './SaDetails';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const  Display = () =>{
  return (  
    <Tab.Navigator 
    screenOptions={{ 
      headerShown: false,
    }}
    >
    <Tab.Screen
      name="Web Application Development"
      component={WebDetails}
      options={{
      tabBarIcon:({ focused }) => (
        <FontAwesome5
          name="window-maximize"
          size={focused ? 35 : 20}
          color={focused ? "#00acee" : "#000"}/>
      ),
      }}
      />
    <Tab.Screen
      name="Mobile Application Development"
      component={MobileDetails}
      options={{
        tabBarIcon:({ focused }) => (
          <FontAwesome5
            name="id-badge"
            size={focused ? 35 : 20}
            color={focused ? "#00acee" : "#000"}/>
        ),
        }}/>
    
    <Tab.Screen
      name="Standalone Application Development"
      component={SaDetails}
      options={{
        tabBarIcon:({ focused }) => (
          <FontAwesome5
            name="list-alt"
            size={focused ? 35 : 20}
            color={focused ? "#00acee" : "#000"}/>
        ),
        }}/>

    </Tab.Navigator>  
   
  );
}
export default Display;

 









/* <Drawer.Screen
          name="category"
          component={Catergory}
          options={{
            title: "Category",
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="discord"
                size={focused ? 25 : 20}
                color={focused ? "#00acee" : "#000"}
              />
            ),
          }}
        />

        <Drawer.Screen 
          name="search"
          component={Search}
          options={{
            title: "Search",
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="search"
                size={focused ? 25 : 20}
                color={focused ? "#00acee" : "#000"}
              />
            ),
          }}
        />*/

        /*<Drawer.Navigator independent={true}
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: "left",
          drawerType: "front",
          swipeEdgeWidth: 200,
          headerShown: true,
          overlayColor: "#00000050",

          drawerStyle: {
            backgroundColor: "#dee0e8",
            width: 240,
          },
          swipeEnabled: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#00acee" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="Home"
                size={focused ? 25 : 20}
                color={focused ? "#00acee" : "#000"}
              />
            ),
          }}
        />

       
      </Drawer.Navigator>*/