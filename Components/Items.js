import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Items = ({title, body, nub, money}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.nub}>{nub}</Text>
      <Text style={styles.nub}>{money}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  body: {
    fontSize: 10,
    color: '#2a2727',
  },
  nub: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
  },
  item: {
    marginVertical: 8,
  },
});
export default Items;
