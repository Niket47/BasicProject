import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const AddTran = () => {
  return (
    <>
      <View>
        <Text>AddTran</Text>
        <Text>sign up</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="name" />
        <TextInput
          style={styles.input}
          placeholder="enter mail id"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          keyboardType="numeric"
        />
        <TextInput style={styles.input} placeholder="name" />
        <TouchableOpacity style={styles.button}>
          <Text>login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default AddTran;
