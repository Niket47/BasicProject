import {View, Text, StyleSheet, Modal, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Stack, Button} from '@react-native-material/core';
import * as ImagePicker from 'react-native-image-picker';

const Expense = () => {
  const [imageSource, setImageSource] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  // Geolocation.getCurrentPosition(data => console.log(data));
  const [currentLong, setCurrentLong] = useState('');
  const [currentLat, setCurrentLat] = useState('');
  const [locationStatus, setLocationStatus] = useState('');

  Geolocation.getCurrentPosition(
    //Will give you the current location
    position => {
      //getting the Longitude from the location json
      const currentLongitude = JSON.stringify(position.coords.longitude);
      setCurrentLong(currentLongitude);

      //getting the Latitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      setCurrentLat(currentLatitude);
    },
    error => alert(error.message),
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000,
    },
  );

  // ------
  const openCamera = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'image',
      },
    };

    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImageSource(response.assets[0].uri);
        console.log(response.assets[0].uri);
      }
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Expense</Text>
        <Text style={styles.boldText}>{currentLong}</Text>
        <Text style={styles.boldText}>{currentLat}</Text>
      </View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              {imageSource && (
                <Image
                  source={{uri: imageSource}}
                  style={{width: 150, height: 200}}
                />
              )}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        <View>
          <Stack m={5}>
            <Button title="Capture Image" onPress={openCamera} />
          </Stack>
        </View>

        {/* {imageSource && (
          <Image
            source={{uri: imageSource}}
            style={{width: 200, height: 200}}
          />
        )} */}
        {/* <Button title="Open Camera" onPress={openCamera} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 20,
    color: 'blue',
    marginVertical: 16,
    textAlign: 'center',
  },
  // model
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 45,
    paddingHorizontal: 75,
    paddingVertical: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    marginTop: 3,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 17,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Expense;
