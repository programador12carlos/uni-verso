import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons"
import Octicons from "@expo/vector-icons/Octicons"
import Feather from "@expo/vector-icons/Feather"
import AntDesign from"@expo/vector-icons/AntDesign"
import carteira from "./src/page/carteira"
import calendario from "./src/page/calendario"
import feed from "./src/page/feed/index"
import sms from "./src/page/sms/sms"
import perfil from "./src/page/perfil/index"



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="calendario"  
        component={calendario} 
        options={{
          tabBarIcon:({color ,size, focused}) => {
            if(focused){
              return(
                <Ionicons name='calendar' color={color} size={size}/>
              )
            }return(
              <Ionicons name='calendar' color={color} size={size}/>
            )
          }
        }}       
         />

        <Tab.Screen name="feed" 
        component={feed}
        headerShown
        options={{
          headerShown: false,
          tabBarIcon:({color ,size, focused}) => {
            if(focused){
              return(
                <AntDesign name="home" size={size} color={color} />
              )
            }return(
              <AntDesign name="home" size={24} color={color} />
            )
          }
        }}    
         />
        <Tab.Screen name="sms"
         component={sms}
         options={{
          tabBarIcon:({color,size,focused}) => {
            if(focused){
              return(<Ionicons name="chatbox-outline" size={size} color={color} />)
            }return(<Ionicons name="chatbox-outline" size={size} color={color} />
            )
          }
         }} 
        />
        <Tab.Screen 
        name="carteira"
        component={carteira} 
        options={{
          tabBarIcon:({color,size,focused}) => {
            if(focused){
              return(<Ionicons name="wallet-outline" size={size} color={color} />)
            }return(<Ionicons name="wallet-outline" size={size} color={color} />)
          }
         }}
         />
        <Tab.Screen name="perfil"
         component={perfil}
         options={{
          tabBarIcon:({color,size,focused}) => {
            if(focused){
              return(<Ionicons name="person-outline" size={size} color={color} />)
            }return(<Ionicons name="person-outline" size={size} color={color} />
            )
          }
         }} 
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}
