import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tela de Carteira
 const Carteira = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de feed</Text>
      {/* Adicione o conteúdo da tela de carteira aqui */}
    </View>
  );
};
export default Carteira
