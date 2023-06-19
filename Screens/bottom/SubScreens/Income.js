import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Income = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <View>
        <Text>Income-login</Text>
      </View>
      <View style={styles.container}>
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
export default Income;
