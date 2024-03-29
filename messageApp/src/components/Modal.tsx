import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../utils/styles';

import socket from '../utils/socket';

const Modal = ({setVisible, user}: any) => {
  const [groupName, setGroupName] = useState('');

  //👇🏻 Function that closes the Modal component
  const closeModal = () => setVisible(false);

  //👇🏻 Logs the group name to the console
  const handleCreateRoom = () => {
    if (groupName === '') {
      alert('Please enter a correct username');
      return;
    }
    //👇🏻 sends a message containing the group name to the server
    socket.emit('addUser', {senderId: user, receiverId: groupName});
    closeModal();
  };

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalsubheading}>Enter user's username</Text>
      <TextInput
        style={styles.modalinput}
        placeholder="username"
        onChangeText={value => setGroupName(value)}
      />

      <View style={styles.modalbuttonContainer}>
        <Pressable style={styles.modalbutton} onPress={handleCreateRoom}>
          <Text style={styles.modaltext}>ADD</Text>
        </Pressable>
        <Pressable
          style={[styles.modalbutton, {backgroundColor: '#E14D2A'}]}
          onPress={closeModal}>
          <Text style={styles.modaltext}>CANCEL</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Modal;
