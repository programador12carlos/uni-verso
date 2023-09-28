import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons"
import Octicons from "@expo/vector-icons/Octicons"
import Feather from "@expo/vector-icons/Feather"
import carteira from "./src/page/carteira"
import calendario from "./src/page/calendario"
import feed from "./src/page/feed/index"
import sms from "./src/page/sms/sms"
import home from "./src/page/home/index"

const Tab = createBottomTabNavigator();

const Icons = {
  feed: {
    name: "home",
    library: Ionicons
  },
  home: { 
    name: "users",
    library: Feather
  },
  calendario: {
    name: "calendar",
    library: Octicons
  },
  carteira: {
    name: "wallet-outline",
    library: Ionicons
  },
  sms: {
    name: "chatbox-outline",
    library: Ionicons
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { name, library } = Icons[route.name];
            const IconComponent = library || Ionicons; // Use Ionicons como padrão
            return <IconComponent name={name} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="calendario"  component={calendario} />
        <Tab.Screen name="feed" component={feed} />
        <Tab.Screen name="home" component={home} />
        <Tab.Screen name="carteira" component={carteira} />
        <Tab.Screen name="sms" component={sms} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
