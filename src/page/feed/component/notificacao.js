import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Dimensions} from 'react-native';

export default function Notificacao({ visible, setModalVisible }) {
  const Styles = StyleSheet.create({
    modalstyle: {
      width: 300,
      height: 200,
      alignSelf: "center",
      justifyContent: "flex-start",
      marginTop: 160,
      backgroundColor: "#f4f4f2",
      borderRadius: 10,
    },
    modalHeader: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#f4f4f2",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    modalContent: {
      backgroundColor: "#f4f4f2",
      padding: 20,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    closeButton: {
      position: "absolute",
      top: 10,
      left: 10,
    },
  });

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={Styles.modalstyle}>
        <View style={Styles.modalHeader}>
          <Ionicons name="ios-close-sharp" size={24} color="black" onPress={() => setModalVisible(false)} />

          {/* Adicione o ícone ou outros elementos do cabeçalho aqui */}
        </View>
        <View style={Styles.modalContent}>
          {/* Adicione o conteúdo do seu modal aqui */}
        </View>
      </View>
    </Modal>
  );
}
