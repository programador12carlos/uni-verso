import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions } from "react-native";


import Ionicons from "@expo/vector-icons/Ionicons";

export default function Notificacao({ visible, setModalVisible }) {
  const [windowHeight, setWindowHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    const updateWindowHeight = () => {
      setWindowHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateWindowHeight);

    return () => {
      Dimensions.removeEventListener("change", updateWindowHeight);
    };
  }, []);

  const Styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      height: windowHeight * 0.5,
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
    closeButton: {
      position: "absolute",
      top: 10,
      left: 10,
    },
  });

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalContent}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={Styles.closeButton}>
            <Ionicons name="ios-close-sharp" size={24} color="black" />
          </TouchableOpacity>
          <Text>Conteúdo do Modal</Text>
          {/* Adicione o conteúdo do seu modal aqui */}
        </View>
      </View>
    </Modal>
  );
}
