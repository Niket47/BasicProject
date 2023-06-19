import {View, Text, Button} from 'react-native';
import React from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';
const RecentScreen = () => {
  const AskForPermission = Permission => {
    request(Permission).then(result => {
      console.log(result);
    });
  };

  return (
    <View>
      <Text>RecentScreen</Text>
      <Button
        onPress={() => AskForPermission(PERMISSIONS.ANDROID.CAMERA)}
        title="camara"
        color="#841584"
      />
      <Button
        onPress={() => AskForPermission(PERMISSIONS.ANDROID.READ_CONTACTS)}
        title="contacts"
        color="#841584"
      />
    </View>
  );
};

export default RecentScreen;
