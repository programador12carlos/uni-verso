import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import carteira from "./src/page/carteira"
import calendario from "./src/page/calendario"
import feed from "./src/page/feed/index"
import sms from "./src/page/sms/sms"
import perfil from "./src/page/perfil/index"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
          tabBarStyle: {
            backgroundColor: '#000',
          },
          headerShown: false ,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'calendario') {
              iconName = 'calendar';
            } else if (route.name === 'feed') {
              iconName = 'home';
            } else if (route.name === 'sms') {
              iconName = 'chatbox-outline';
            } else if (route.name === 'carteira') {
              iconName = 'wallet-outline';
            } else if (route.name === 'perfil') {
              iconName = 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="calendario" component={calendario} />
        <Tab.Screen name="feed" component={feed} />
        <Tab.Screen name="sms" component={sms} />
        <Tab.Screen name="carteira" component={carteira} />
        <Tab.Screen name="perfil" component={perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
