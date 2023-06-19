import React, {useState} from 'react';
import {View, Button, Image, Text} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const ProflieScreen = () => {
  const [imageSource, setImageSource] = useState('');
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
      <View>
        <Text>ProflieScreen</Text>
      </View>
      <View>
        {imageSource && (
          <Image
            source={{uri: imageSource}}
            style={{width: 200, height: 200}}
          />
        )}
        <Button title="Open Camera" onPress={openCamera} />
      </View>
    </>
  );
};

export default ProflieScreen;
