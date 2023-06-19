import 'react-native-gesture-handler';
import {
  StyleSheet,
  Image,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddTran from './Screens/bottom/AddTran';
import HomeScreen from './Screens/bottom/HomeScreen';
import RecentScreen from './Screens/bottom/RecentScreen';
import Budget from './Screens/bottom/Budget';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Expense from './Screens/bottom/SubScreens/Expense';
import Income from './Screens/bottom/SubScreens/Income';
import Transfer from './Screens/bottom/SubScreens/Transfer';
import ProflieScreen from './Screens/bottom/ProflieScreen';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SettingScreen = ({navigation}) => {
  const [opened, setOpened] = useState(false);

  const OpenMenu = () => {
    setOpened(!opened);
    // Alert.alert('image clicked');
  };
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 25,
          right: 20,
          left: 20,
          elevation: 2,
          borderRadius: 15,
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="home"
              //   color={color}
              size={32}
              color={focused ? '#7F3DFF' : '#C6C6C6'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Recent"
        component={RecentScreen}
        options={{
          tabBarLabel: 'Recent',
          tabBarIcon: ({size, color, focused}) => (
            <Icons
              name="carryout"
              size={32}
              //   color={color}
              color={focused ? '#7F3DFF' : '#C6C6C6'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Addtrans"
        component={AddTran}
        options={{
          tabBarLabel: 'AddData',
          tabBarIcon: ({size, color, focused}) => (
            <View style={styles.tabicon}>
              {opened ? (
                <View style={styles.Touchable}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Income')}>
                    <View style={styles.Income}>
                      <Image
                        style={styles.TouchableImage}
                        source={require('./assets/icons/Income.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Transfer')}>
                    <View style={styles.Transaction}>
                      <Image
                        style={styles.TouchableImage}
                        source={require('./assets/icons/Transaction.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Expense')}>
                    <View style={styles.Expense}>
                      <Image
                        style={styles.TouchableImage}
                        source={require('./assets/icons/Expense.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              ) : null}

              <Pressable onPress={OpenMenu}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  source={
                    focused
                      ? require('./assets/icons/crossplus.png')
                      : require('./assets/icons/plus.png')
                  }
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarLabel: 'Budget',
          tabBarIcon: ({size, color, focused}) => (
            <Icons
              name="bars"
              size={32}
              color={focused ? '#7F3DFF' : '#C6C6C6'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Proflie"
        component={ProflieScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({size, color, focused}) => (
            <Icons
              name="addusergroup"
              size={32}
              //color={color}
              color={focused ? '#7F3DFF' : '#C6C6C6'}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SettingsScreen"
            component={SettingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Expense" component={Expense} />
          <Stack.Screen name="Income" component={Income} />
          <Stack.Screen name="Transfer" component={Transfer} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  tabicon: {
    marginTop: -80,
    // top: -27,
    alignItems: 'center',
  },
  TouchableImage: {
    width: 60,
    height: 60,
  },
  Touchable: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Expense: {
    position: 'absolute',
    left: 60,
  },
  Transaction: {
    position: 'absolute',
    right: 60,
  },
  Income: {
    position: 'absolute',
    top: -80,
  },
});
export default App;
