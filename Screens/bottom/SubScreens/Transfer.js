import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Transfer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({field: '', Message: ''});

  const onSubmit = () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let loginError = {field: '', Message: ''};
    if (email === '') {
      loginError.field = 'email';
      loginError.Message = 'email is req';
      setError(loginError);
    } else if (mailformat.test(email) === false) {
      loginError.field = 'email';
      loginError.Message = 'email is req11111';
      setError(loginError);
    } else if (password === '') {
      loginError.field = 'password';
      loginError.Message = 'email is req';
      setError(loginError);
    } else {
      setError({field: '', Message: ''});
      Alert.alert('login sucess');
    }
    // setEmail('');
    // setPassword('');
  };

  // const emailtexthandler = value => {
  //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //   if (value === mailformat) {
  //     Alert.alert('Valid email address!');
  //     return true;
  //   } else {
  //     Alert.alert('You have entered an invalid email address!');
  //     return false;
  //   }

  //   setEmail(value);
  // };
  const passwordtexthandler = value => {
    setPassword(value);
  };
  console.log(email);
  console.log(password);

  return (
    <View>
      <Text>Transfer</Text>
      <TextInput value={email} onChangeText={value => setEmail(value)} />
      {error.field === 'email' && (
        <Text style={styles.error}>{error.Message}</Text>
      )}
      <TextInput value={password} onChangeText={value => setPassword(value)} />
      {error.field === 'password' && (
        <Text style={styles.error}>{error.Message}</Text>
      )}
      <Button title="submit" onPress={onSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

export default Transfer;
