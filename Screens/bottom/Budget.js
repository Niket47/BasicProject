import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Items from '../../Components/Items';
import {
  Stack,
  Switch,
  TextInput,
  IconButton,
} from '@react-native-material/core';
const Budget = () => {
  const [itemId, setItemId] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setLoading] = useState();
  const [goaltext, setGoaltext] = useState();
  const [getdata, setGetdata] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'GET',
        },
      );
      const json = await response.json();
      setGetdata(json);
      console.log(json);

      console.log(getdata);

      const modifiedArray = [];

      json.map((obj, index) => {
        // Create a new object including existing properties, additional data, and the index parameter
        const newObj = {
          ...obj,
          newProperty: 'new value',
          checked: false,
          keyvale: index,
        };

        // Push the new object into the modified array
        modifiedArray.push(newObj);
      });

      console.log(modifiedArray);

      setGetdata(modifiedArray);
      console.log(modifiedArray);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const num1 = itemId;
  const num2 = goaltext;
  const sum = isEnabled ? num1 * num2 : 0;

  useEffect(() => {
    getMovies();
    // setItemId(null);
  }, []);

  const goalInputhandler = etext => {
    setGoaltext(etext);
  };
  const handleAddItem = () => {
    console.log(goaltext);
  };

  // const renderItem = ({item}) => (
  //   <Items nub={item.id} title={item.title} body={item.body} />
  // );
  const showRender = ({item}) => {
    const sameid = item.id;

    if (goaltext == sameid) {
      setItemId(item.keyvale);
      return (
        <Items
          nub={item.id}
          money={item.keyvale}
          title={item.title}
          body={item.body}
        />
      );
    }
  };

  return (
    <>
      <Stack spacing={2} m={8}>
        <TextInput
          label="Enter a value"
          variant="standard"
          onChangeText={goalInputhandler}
          keyboardType="numeric"
        />
      </Stack>

      <Button title="Add goal" onPress={handleAddItem} />
      <Stack center spacing={1}>
        <Switch
          value={isEnabled}
          onValueChange={value => setIsEnabled(value)}
        />
      </Stack>
      <View>
        <Text style={styles.screenTitle}>Budget</Text>
        {isEnabled && <Text>The value is: {sum}</Text>}
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={getdata}
            renderItem={showRender}
            keyExtractor={item => item.id}
          />
        )}
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
  screenTitle: {
    fontFamily: 'Poppins-Bold',
  },
});

export default Budget;
