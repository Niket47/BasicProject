import {View, Button, Text} from 'react-native';
import React from 'react';

const CxButton = ({onbtnPress, title, color}) => {
  return (
    <View>
      <Button onPress={onbtnPress} title={title} color={color} />
    </View>
  );
};

export default CxButton;
