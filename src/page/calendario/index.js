import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const windowHeight = Dimensions.get('window').height;

const MyModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleChangeText = (text, field) => {
    if (field === 'titulo') {
      setTitulo(text);
    } else if (field === 'descricao') {
      setDescricao(text);
    }
  };

  const closeOnSwipe = (event) => {
    if (event.nativeEvent.state === State.END) {
      toggleModal();
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={60} color="#FBE4D8" />
          </View>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <PanGestureHandler onHandlerStateChange={closeOnSwipe}>
              <View style={styles.modalContent}>
                <TextInput
                  style={[styles.input, { fontSize: 18 }]} // Aumente o tamanho da fonte para 18 (ou qualquer tamanho desejado)
                  value={titulo}
                  onChangeText={(text) => handleChangeText(text, 'titulo')}
                  placeholder="Nome da tarefa"
                  placeholderTextColor="#666"
                  fontWeight="bold"
                />
                <TextInput
                  style={styles.input}
                  value={descricao}
                  onChangeText={(text) => handleChangeText(text, 'descricao')}
                  placeholder="Descrição"
                  placeholderTextColor="#666"
                />
              </View>
            </PanGestureHandler>
          </View>
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#DFB6B2",
    padding: 20,
  },

  input: {
    width: '100%',
    height: 40,
   // borderColor: 'transparent',
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
   // marginBottom: 20,
  },

  addButton: {
    backgroundColor: '#854F6C',
    borderRadius: 20,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: windowHeight * 0.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,

  },
});

export default MyModal;
