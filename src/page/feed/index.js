import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const Feed = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    box1: {
      paddingTop: getStatusBarHeight(),
      height: 160,
      flexShrink: 0,
      borderRadius: 19,
      backgroundColor: '#313131',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box2: {},
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.box1}>

      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default Feed;
